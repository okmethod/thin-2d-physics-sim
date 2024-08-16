export interface Point {
  x: number;
  y: number;
}

export async function getVertices(imageUrl: string, scale: number): Promise<Point[]> {
  const imageElement = await loadImage(imageUrl);
  const imageArray = getImageArrayFromElement(imageElement);
  const vertices = getVerticesFromImageArray(imageArray, imageElement.width, imageElement.height);
  const verticesClockwise = sortVerticesClockwise(vertices);
  const verticesScaled = scaleVertices(verticesClockwise, scale);
  return verticesScaled;
}

async function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = url;
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(err);
  });
}

function getImageArrayFromElement(imageElement: HTMLImageElement): Uint8ClampedArray {
  const { width, height } = imageElement;

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas context could not be obtained");
  ctx.drawImage(imageElement, 0, 0, width, height);

  const imageData = ctx.getImageData(0, 0, width, height);
  return imageData.data;
}

function getVerticesFromImageArray(imageArray: Uint8ClampedArray, width: number, height: number): Point[] {
  const vertices: Point[] = [];
  const visited = new Set<string>();

  function _isTransparent(x: number, y: number): boolean {
    const index = (y * width + x) * 4;
    return imageArray[index + 3] === 0;
  }

  function _addVertex(x: number, y: number) {
    const key = `${x},${y}`;
    if (!visited.has(key)) {
      vertices.push({ x, y });
      visited.add(key);
    }
  }

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (!_isTransparent(x, y)) {
        if (y === 0 || _isTransparent(x, y - 1)) _addVertex(x, y); // 上
        if (y === height - 1 || _isTransparent(x, y + 1)) _addVertex(x, y); // 下
        if (x === 0 || _isTransparent(x - 1, y)) _addVertex(x, y); // 左
        if (x === width - 1 || _isTransparent(x + 1, y)) _addVertex(x, y); // 右
      }
    }
  }
  return vertices;
}

function sortVerticesClockwise(vertices: Point[]): Point[] {
  const centroid = vertices.reduce(
    (acc, vertex) => {
      acc.x += vertex.x;
      acc.y += vertex.y;
      return acc;
    },
    { x: 0, y: 0 },
  );
  centroid.x /= vertices.length;
  centroid.y /= vertices.length;

  const verticesWithAngles = vertices.map((vertex) => {
    const angle = Math.atan2(vertex.y - centroid.y, vertex.x - centroid.x);
    return { ...vertex, angle };
  });

  verticesWithAngles.sort((a, b) => a.angle - b.angle);
  return verticesWithAngles.map((vertex) => ({ x: vertex.x, y: vertex.y }));
}

function scaleVertices(vertices: Point[], scale: number): Matter.Vector[] {
  const centerX = vertices.reduce((sum, v) => sum + v.x, 0) / vertices.length;
  const centerY = vertices.reduce((sum, v) => sum + v.y, 0) / vertices.length;

  return vertices.map((v) => ({
    x: centerX + (v.x - centerX) * scale,
    y: centerY + (v.y - centerY) * scale,
  }));
}
