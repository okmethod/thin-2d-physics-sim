import { navigateTo } from "$lib/utils/navigation.client";
import { GITHUB_REPO_URL } from "$lib/constants/common";

interface Content {
  title: string;
  action: "navigate" | "redirect";
  route: string;
}

export interface ContentButtonProps {
  title: string;
  onClick: () => void;
}

const contents: Content[] = [
  {
    title: "simple",
    action: "navigate",
    route: "/simple",
  },
  {
    title: "collision-detect",
    action: "navigate",
    route: "/collision-detect",
  },
  {
    title: "area-wrap",
    action: "navigate",
    route: "/area-wrap",
  },
  {
    title: "high-restitution",
    action: "navigate",
    route: "/high-restitution",
  },
  {
    title: "poly-decomp",
    action: "navigate",
    route: "/poly-decomp",
  },
  {
    title: "github repository",
    action: "redirect",
    route: GITHUB_REPO_URL,
  },
];

export async function load() {
  const propsArray: ContentButtonProps[] = contents.map((content) => ({
    title: content.title,
    onClick: _getOnClick(content.action, content.route),
  }));

  function _getOnClick(action: string, route: string): () => void {
    const actions: { [key: string]: () => void } = {
      navigate: () => navigateTo(route),
      redirect: () => window.open(route, "_blank"),
    };
    return actions[action] || (() => {});
  }

  return { propsArray };
}
