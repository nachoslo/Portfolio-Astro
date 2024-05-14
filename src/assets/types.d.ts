type Text = Record<string, string>;

interface CssValues {
  text: string;
  bg: string;
  border: string;
  borderImg: string;
}

interface Css extends CssValues {
  dark: CssValues;
}

type Proyects = {
  title: string;
  year: string;
  desc: string;
  href: string;
  src: ImageMetadata;
  srcMobile: ImageMetadata;
  alt: string;
  hash: string[];
  css: Css;
};

type Bucketlist = {
  made: string[];
  do: string[];
};

type Timeline = {
  date: string;
  experiences: { title: string; desc: string }[];
};

export interface UI {
  text: Text;
  proyects: Proyects[];
  bucketlist: Bucketlist;
  timeline: Timeline[];
}

export type Contact = {
  title: string;
  href: string;
  svg: React.ComponentType;
}[];

export type TechStack = {
  name: string;
  svg: React.ComponentType;
}[];

export type Apps = {
  name: string;
  icon: ImageMetadata;
}[];

export type Music = {
  name: string;
  icon: ImageMetadata;
  link: string;
}[];
