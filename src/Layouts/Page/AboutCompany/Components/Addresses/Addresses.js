import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
<div class="container justify-content-between col">
        <div className='d-flex flex-column gap-2 mt-5 address-frame'>
            <div className='title'>Адреса заведений</div>
            <div className='d-flex flex-column gap-3 my-4'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                </div>
                <div className='d-flex flex-column gap-3 mt-5'>
                <SecondaryButton>Добавить филиал</SecondaryButton> </div>
            </div> </div>
      
    );
}

export default Addresses;