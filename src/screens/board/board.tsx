import styled from "styled-components"
import { COLORS, SQUARES_PER_COLUMN, SQUARES_PER_LINE } from "../../utils/contants"

const Square = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${props => props.backgroundColor};
`

const Line = styled.div`
    display: flex;
`



const getSquareColor = (line: number, column: number) => {
    const isLineEven = line % 2 == 0
    const isColumnEven = column % 2 == 0

    const hasSameParity = isLineEven === isColumnEven

    return hasSameParity ? COLORS.primaryColor : COLORS.secondaryColor
}

const LineContainer = ({lineNumber}: {lineNumber: number}) => {
    return (
        <Line>
            {Array(SQUARES_PER_COLUMN).fill(null).map((_, columnNumber) => <Square backgroundColor={getSquareColor(lineNumber, columnNumber)} />)}
        </Line>
    )
}


export const Board = () => {
    return Array(SQUARES_PER_LINE).fill(null).map((_, lineNumber) => <LineContainer lineNumber={lineNumber}/>)
}
