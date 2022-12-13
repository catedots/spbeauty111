import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
function AboutCompany() {
    return (
        <div>
            <Heading/> {/* Заголовок и кнопка справа */}

            <div class="container">
  <div class="row justify-content-evenly">
    <div class="col-4">
    <General/> {/* Основная информация вроде названия, типа и телефона */}
    </div>
    <div class="col-4">
    <Addresses/> {/* Список доступных адресов заведений */}
    </div>
  </div>  </div>  </div>

          
    );
}

export default AboutCompany;