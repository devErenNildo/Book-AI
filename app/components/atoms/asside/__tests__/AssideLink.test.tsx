import React from "react";
import { render, screen } from "@testing-library/react";
import AssideLinks from "../AssideLink";
import { MockNextLinkProps } from "@/app/types/interface/interfaces";


jest.mock("next/link", () => {
    return ({ href, className, children }: MockNextLinkProps) => (
        <a href={href} className={className} data-testid="mock-link">
            {children}
        </a>
    );
});

const MockIcon = ({ color }: { color: string }) => (
    <svg data-testid="mock-icon" style={{ color }} />
);

describe("AssideLinks atom component", () => {
    const defaultProps = {
        href: "/test-path",
        Icon: MockIcon,
        placeholder: "Test Placeholder",
    };

    it("renderiza o link com o href correto", () => {
        render(<AssideLinks {...defaultProps} />);
        const link = screen.getByTestId("mock-link");
        expect(link).toHaveAttribute("href", "/test-path");
    });

    it("renderiza o ícone com a cor correta", () => {
        render(<AssideLinks {...defaultProps} />);
        const icon = screen.getByTestId("mock-icon");
        expect(icon).toBeInTheDocument();
        expect(icon).toHaveStyle({ color: "var(--text)" });
    });

    it("renderiza o texto do placeholder", () => {
        render(<AssideLinks {...defaultProps} />);
        expect(screen.getByText("Test Placeholder")).toBeInTheDocument();
    });

    it("aplica a classe correta ao link", () => {
        render(<AssideLinks {...defaultProps} />);
        const link = screen.getByTestId("mock-link");
        expect(link).toHaveClass(
            "flex",
            "items-center",
            "gap-3",
            "hover:bg-purple-600/20",
            "px-3",
            "py-2",
            "rounded",
            "transition",
            "text-text"
        );
    });

    it("renderiza com um placeholder diferente", () => {
        render(<AssideLinks {...defaultProps} placeholder="Another Placeholder" />);
        expect(screen.getByText("Another Placeholder")).toBeInTheDocument();
    });

    it("renderiza com um href diferente", () => {
        render(<AssideLinks {...defaultProps} href="/another-path" />);
        const link = screen.getByTestId("mock-link");
        expect(link).toHaveAttribute("href", "/another-path");
    });

    it("renderiza com um ícone diferente", () => {
        const AnotherIcon = ({ color }: { color: string }) => (
            <svg data-testid="another-icon" style={{ color }} />
        );
        render(<AssideLinks {...defaultProps} Icon={AnotherIcon} />);
        expect(screen.getByTestId("another-icon")).toBeInTheDocument();
    });
});