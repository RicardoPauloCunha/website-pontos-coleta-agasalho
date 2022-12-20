import { Card } from "reactstrap";
import styled from "styled-components";

export const DonationPointCardEl = styled(Card)`
    & + & {
        margin-top: 1rem;
    }
`;