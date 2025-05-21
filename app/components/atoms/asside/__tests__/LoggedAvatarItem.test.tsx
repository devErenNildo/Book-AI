import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoggedAvatarItem from "../LoggedAvatarItem";

describe("LoggedAvatarItem atom component", () => {
    const MockIcon = () => <svg data-testid="mock-icon" />;

    it("renderiza o ícone e o label corretamente", () => {
        render(<LoggedAvatarItem icon={<MockIcon />} label="Perfil" />);
        expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
        expect(screen.getByText("Perfil")).toBeInTheDocument();
    });

    it("executar a função onClick corretamente", () => {
        const handleClick = jest.fn();
        render(<LoggedAvatarItem icon={<MockIcon />} label="Sair" onClick={handleClick} />);
        fireEvent.click(screen.getByText("Sair"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("aplica as classes corretamente", () => {
        render(<LoggedAvatarItem icon={<MockIcon />} label="Configurações" />);
        const li = screen.getByText("Configurações").closest("li");
        expect(li).toHaveClass(
            "px-4",
            "py-2",
            "hover:bg-gray-100",
            "flex",
            "items-center",
            "gap-2",
            "cursor-pointer",
            "text-sm"
        );
    });
});