import { Alert } from "reactstrap";
import styled, { css } from "styled-components";

export const WarningEl = styled(Alert)`
    display: none;

    ${props => props.$showWarning && css`
        display: flex;
    `};

    div + & {
        margin-top: 1rem;
    }
`;