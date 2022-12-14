import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (

        <div className='d-inline-flex flex-column gap-2 mt-4 my-5 address-frame col'>
            <div className='title'>Адреса заведений</div>
            <div className='d-inline-flex flex-column gap-3 my-5'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                <SecondaryButton>Добавить филиал</SecondaryButton> </div>
            </div>
      
    );
}

export default Addresses;