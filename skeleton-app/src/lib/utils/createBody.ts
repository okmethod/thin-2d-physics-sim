declare const Matter: typeof import("matter-js");
import type { Point } from "$lib/types/matter";
import { getVertices, scaleVertices, convertToConvex, decomposeToConvex } from "$lib/utils/calcVertices";

export async function createSpriteBody(imageUrl: string, scale: number, spawnPoint: Point): Promise<Matter.Body> {
  const vertices = await getVertices(imageUrl);
  const scaledVertices = scaleVertices(vertices, scale * 0.9);
  const convexVertices = convertToConvex(scaledVertices);
  return Matter.Bodies.fromVertices(spawnPoint.x, spawnPoint.y, [convexVertices], {
    restitution: 0.2, // 反発係数
    friction: 0.1, // 摩擦係数
    density: 0.001, // 密度
    // mass:  // 質量は密度と面積から自動計算される
    render: {
      sprite: {
        texture: imageUrl,
        xScale: scale,
        yScale: scale,
      },
    },
  });
}

export async function createDecompBody(imageUrl: string, scale: number, spawnPoint: Point): Promise<Matter.Body> {
  const vertices = await getVertices(imageUrl);
  const scaledVertices = scaleVertices(vertices, scale);
  const decompVertices = decomposeToConvex(scaledVertices);
  return Matter.Bodies.fromVertices(spawnPoint.x, spawnPoint.y, [decompVertices.flat()], {
    restitution: 0.2, // 反発係数
    friction: 0.1, // 摩擦係数
    density: 0.001, // 密度
    // mass:  // 質量は密度と面積から自動計算される
    render: {
      fillStyle: "#ffffff",
      strokeStyle: "#000000",
      lineWidth: 1,
    },
  });
}
