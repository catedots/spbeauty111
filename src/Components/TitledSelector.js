import styled from "styled-components";

const TitleS = styled.div`
    color: #94A3B8;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
`;


const Select = styled.select`
    background: url("data:image/svg+xml,<svg height='10px' width='10px' viewBox='0 0 16 16' fill='%23000000' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>") no-repeat;
    background-position: calc(100% - 0.75rem) center !important;
    -moz-appearance:none !important;
    -webkit-appearance: none !important; 
    appearance: none !important;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;
    gap: 16px;

    /* Steel Gray / 50 */

    background: #F8FAFC;
    /* Steel Gray / 200 */
    
    border: 1px solid #E2E8F0;
    border-radius: 24px;
    
    /* Inside auto layout */
    
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    &:hover {
         opacity 0.8;
    }
`;

function TitledSelector({title, options}) {
    const Title = title === undefined 
        ? (<div></div>) 
        : (<TitleS>{title}</TitleS>);
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Select className='p-2'>
                {options.map(optionName => {
                    return (
                        <option key={optionName}>{optionName}</option>
                    );
                })}
            </Select>
        </div>
    );
}

export default TitledSelector;