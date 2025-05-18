import React from "react";

export interface PropsNavLink {
    href: string;
    children: React.ReactNode;
}

export interface PropsButton {
    label: string;
    onClick?: () => void;
    gradient?: boolean;
    color?: string;
}

export interface HeadingProps {
    text: string;
    highlight?: string;
}

export interface PropsCardText {
    id?: number;
    title: string;
    text: string;
}

export interface PropsImage {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

export interface PropsCardAvatar {
  images: {
    name: {
      first: string;
      last: string;
    };
    picture: {
      thumbnail: string;
    };
  }[];
}

export interface AvatarApiResponse {
    results: {
        name: {
            title: string;
            first: string;
            last: string;
        };
        picture: {
            large: string;
            medium: string;
            thumbnail: string;
        };
    }[];
    info: {
        seed: string;
        results: number;
        page: number;
        version: string;
    };
}