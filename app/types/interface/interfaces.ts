import { StaticImageData } from "next/image";
import React from "react";

export interface PropsNavLink {
    href: string;
    children: React.ReactNode;
}

export interface PropsChildren {
    children: React.ReactNode;
    color?: string;
}

export interface PropsAboutSection extends PropsChildren {
    paragraph: string;
    listItem?: string[];
}

export interface PropsOrganismAbout extends PropsAboutSection {
    image: StaticImageData;
    imageLeft: boolean;
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

export interface GoogleUser {
    name: string;
    email: string;
    picture: string;
}

export interface PropsAvatarLogged {
    img: string;
    name: string;
    onClick: () => void;
}

export interface PropsAssideLinks {
    href: string;
    Icon: React.ElementType;
    placeholder: string;
    className?: string;
}

export interface PropsBookInfo {
    author: string;
    title: string;
    description: string;
}

export interface PropsBookTag {
    tags: string;
    tag: boolean;
}

export interface PropsBookTags {
    tags: string[];
}

export interface PropsLikes {
    likes: number;
}

export interface PropsCardBook {
    id: string
    title: string;
    author: string;
    description: string;
    coverURL: string;
    likes: number;
    tags?: string[];
}

export interface PropsInputUpload {
    type: string;
    accept: string;
}

export interface ThemeContextType {
    theme: "light" | "dark";
    toggleTheme: () => void;
    isMounted: boolean;
}

export interface BookAndUser extends PropsCardBook {
    pdfURL: string;
    createdAt: Date;
    userId: string;
    userName: string;
    userPhoto: string;
}

export interface InterfaceMessage {
    id: string;
    message: string;
    senderName: string;
    senderPhoto: string;
    senderId: string;
    createdAt: Date;
}

export interface LoggedUser {
    uid: string;
    displayName: string | null;
    photoURL: string | null;
}

export interface LabelProps {
    children: React.ReactNode;
    htmlFor: string;
}

export interface ErrorProps {
  message?: string;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export interface MockNextLinkProps {
    href: string;
    className?: string;
    children: React.ReactNode;
}