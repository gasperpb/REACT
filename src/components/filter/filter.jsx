import { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Image from "./imagem1.jpg";

const ImageContainer = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
});

const ImageStyled = styled("img")({
    maxWidth: "100%",
    maxHeight: "100%",
    filter: "none",
    transition: "filter 0.3s ease-in-out",
});

const ButtonGroup = styled("div")({
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    margin: "16px 0",
});

const Filter = () => {
    const [filter, setFilter] = useState("none");

    const handleColor = () => {
        setFilter("hue-rotate(90deg)");
    };

    const handleOpacity = () => {
        setFilter("opacity(0.5)");
    };

    const handleContrast = () => {
        setFilter("contrast(150%)");
    };

    const handleBrightness = () => {
        setFilter("brightness(75%)");
    };

    const handleGrayscale = () => {
        setFilter("grayscale(100%)");
    };

    return (
        <Box sx={{ textAlign: "center" }}>
            <ImageContainer>
                <ImageStyled src={Image} style={{ filter: filter }} />
            </ImageContainer>
            <ButtonGroup>
                <Button variant="contained" onClick={handleColor}>
                    Cor
                </Button>
                <Button variant="contained" onClick={handleOpacity}>
                    Opacidade
                </Button>
                <Button variant="contained" onClick={handleContrast}>
                    Contraste
                </Button>
                <Button variant="contained" onClick={handleBrightness}>
                    Brilho
                </Button>
                <Button variant="contained" onClick={handleGrayscale}>
                    Preto e branco
                </Button>
            </ButtonGroup>
        </Box>
    );
};

export default Filter;
