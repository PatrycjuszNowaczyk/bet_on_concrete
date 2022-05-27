export default function ShopFilters() {
  return (
    <div className="border-2 border-black px-2 py-4">
      <h3 className="mb-2 text-2xl text-center font-bold text-white bg-neutral-500">
        FILTROWANIE
      </h3>
      {/* KATEGORIE */}
      <ul className="pl-12 pb-2">
        <h3 className="text-xl font-bold">Kategorie:</h3>
        <li className="pl-4">
          <label htmlFor="kategorie-all" className="cursor-pointer">
            <input
              className="mr-2 cursor-pointer border-1 border-black accent-black"
              type="checkbox"
              defaultChecked="true"
              name="kategorie-all"
              id="kategorie-all"
            />
            <span>wszystko</span>
          </label>
        </li>
        <li className="pl-4">
          <label htmlFor="gryzaki" className="cursor-pointer">
            <input
              className="mr-2 cursor-pointer border-1 border-black accent-black"
              type="checkbox"
              name="gryzaki"
              id="gryzaki"
            />
            <span>gryzaki</span>
          </label>
        </li>
        <li className="pl-4">
          <label htmlFor="przysmaki" className="cursor-pointer">
            <input
              className="mr-2 cursor-pointer border-1 border-black accent-black"
              type="checkbox"
              name="przysmaki"
              id="przysmaki"
            />
            <span>przysmaki</span>
          </label>
        </li>
        <li className="pl-4">
          <label htmlFor="suplementy" className="cursor-pointer">
            <input
              className="mr-2 cursor-pointer border-1 border-black accent-black"
              type="checkbox"
              name="suplementy"
              id="suplementy"
            />
            <span>suplementy</span>
          </label>
        </li>
        <li className="pl-4">
          <label htmlFor="kosmetyki" className="cursor-pointer">
            <input
              className="mr-2 cursor-pointer border-1 border-black accent-black"
              type="checkbox"
              name="kosmetyki"
              id="kosmetyki"
            />
            <span>kosmetyki</span>
          </label>
        </li>
        <li className="pl-4">
          <label htmlFor="akcesoria" className="cursor-pointer">
            <input
              className="mr-2 cursor-pointer border-1 border-black accent-black"
              type="checkbox"
              name="akcesoria"
              id="akcesoria"
            />
            <span>akcesoria</span>
          </label>
        </li>
      </ul>
      {/* PRODUCENT */}
      <ul className="pl-12 pb-2">
        <h3 className="text-xl font-bold">Producent:</h3>
        <li className="pl-4">
          <label htmlFor="producent-all" className="cursor-pointer">
            <input
              className="mr-2 cursor-pointer border-1 border-black accent-black"
              type="checkbox"
              defaultChecked="true"
              name="producent-all"
              id="producent-all"
            />
            <span>wszystko</span>
          </label>
        </li>
        <li className="pl-4">
          <label htmlFor="Animini" className="cursor-pointer">
            <input
              className="mr-2 cursor-pointer border-1 border-black accent-black"
              type="checkbox"
              name="Animini"
              id="Animini"
            />
            <span>Animini</span>
          </label>
        </li>
        <li className="pl-4">
          <label htmlFor="Doggy" className="cursor-pointer">
            <input
              className="mr-2 cursor-pointer border-1 border-black accent-black"
              type="checkbox"
              name="Doggy"
              id="Doggy"
            />
            <span>Doggy</span>
          </label>
        </li>
        <li className="pl-4">
          <label htmlFor="PetLi" className="cursor-pointer">
            <input
              className="mr-2 cursor-pointer border-1 border-black accent-black"
              type="checkbox"
              name="PetLi"
              id="PetLi"
            />
            <span>PetLi</span>
          </label>
        </li>
        <li className="pl-4">
          <label htmlFor="Choppy" className="cursor-pointer">
            <input
              className="mr-2 cursor-pointer border-1 border-black accent-black"
              type="checkbox"
              name="Choppy"
              id="Choppy"
            />
            <span>Choppy</span>
          </label>
        </li>
      </ul>
      {/* DOSTĘPNOŚĆ */}
      <ul className="pl-12 pb-2">
        <h3 className="text-xl font-bold">Dostępność:</h3>
        <li className="pl-4">
          <label htmlFor="dostepnosc-all" className="cursor-pointer">
            <input
              className="mr-2 cursor-pointer border-1 border-black accent-black"
              type="checkbox"
              defaultChecked="true"
              name="dostepnosc-all"
              id="dostepnosc-all"
            />
            <span>wszystko</span>
          </label>
        </li>
        <li className="pl-4">
          <label htmlFor="dostepny" className="cursor-pointer">
            <input
              className="mr-2 cursor-pointer border-1 border-black accent-black"
              type="checkbox"
              name="dostepny"
              id="dostepny"
            />
            <span>dostępny</span>
          </label>
        </li>
        <li className="pl-4">
          <label htmlFor="na-zamowienie" className="cursor-pointer">
            <input
              className="mr-2 cursor-pointer border-1 border-black accent-black"
              type="checkbox"
              name="na-zamowienie"
              id="na-zamowienie"
            />
            <span>na zamówienie</span>
          </label>
        </li>
      </ul>
      {/* CENA */}
      <div>
        <h3 className="pl-12 text-xl font-bold">Cena:</h3>
        <div className="flex gap-2 justify-center items-center">
          <input
            className="w-1/3 p-2 text-center border-2 border-black appearance-none font-bold"
            type="text"
            name="cena-od"
            id="cena-od"
            placeholder="od"
          />
          <hr className="w-[15px] border-2 border-black" />
          <input
            className="w-1/3 p-2 text-center border-2 border-black appearance-none font-bold"
            type="text"
            name="cena-do"
            id="cena-do"
            placeholder="do"
          />
        </div>
      </div>
    </div>
  );
}

/*
Kategorie:
    -gryzaki
    -przysmaki
    -suplementy
    -kosmetyki, 
    -akcesoria
Producent:
    -Animini
    -Doggy
    -PetLi
    -Choppy
Dostępność:
    -dostępny
    -na zamówienie
Cena:
    -od - do

*/
