import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import styles from './styles.module.css';
import mainphoto from '../../assets/img/custom.jpg';

var optionList = ["ruže", "tulipani", "orhideje", "tratinčice"];
class Custom extends Component {

    constructor(props) {
        super(props);
        // select = 'izaberi','jedna vrsta' ili 'razvnovrsno'
        // optionList = lista elemenata opcija
        this.state = {
            select: 'select',
            optionList: []
        }
    }

    // funkcija se poziva kada u selectu mijenjamo izbor "jedna vrsta" cvijeta ili "raznovrsno"
    handleOption(e) {

        //chooseOption je opcija "izaberi" koju nakon prvog biranja izbora više nećemo vidjeti
        document.getElementById("chooseOption").style.display = "none";

        // postavljamo po defaultu da je unos kolicine nevidljiv
        document.getElementById("oneFlowerCount").style.display = "none";

        // ako je izabrana opcija "jedna vrsta" ili "raznovrsno" ulazimo u if
        if (e.target.value !== "select") {
            // prikazujemo kontejner za ponuđene opcije 
            document.getElementById("optionsForm").style.display = "block";
            //niz u koji cemo spremiti listu html elemenata opcija
            var makeOptionList = [];

            // ako je izabrana opcija 'raznovrsno'
            if (e.target.value === "many") {
                //pomocu map funkcije ( optionList = popis cvijeca ) stvaramo element za svaku opciju (tj cvijet)
                makeOptionList = optionList.map(option =>
                    // bitno je da svaki element liste ima jedinstveni kljuc (key)
                    // checkbox = moguce je odabrati samo vise cvjetova 
                    <div id={option + "ID"} key={option + "Key1"}>
                        <b>
                            <input className="flowerCheck" value={option} name="flowerCheck"
                                type="checkbox" onChange={this.handleFlowerNumber} />
                            {option}
                        </b>
                        <span className={styles.inputCounterSpan}> <input type="number" defaultValue="0"></input></span>
                    </div>
                )
            }
            // ako je izabrana opcija 'jedna vrsta'
            else if (e.target.value === "one") {
                //pomocu map funkcije ( optionList = popis cvijeca ) stvaramo element za svaku opciju (tj cvijet)
                makeOptionList = optionList.map(option =>
                    // bitno je da svaki element liste ima jedinstveni kljuc (key)
                    // radio button = moguce je odabrati samo jedan cvijet 
                    <div key={option + "Key2"}>
                        <b>
                            <input className="flowerCheck" value={option} name="flowerCheck"
                                type="radio" onChange={this.handleFlowerNumber} />
                            {option}
                        </b>
                    </div>
                )
                //prikazujemo kontejner koji sadrzi input za kolicinu
                document.getElementById("oneFlowerCount").style.display = "block";
            }
        }
        // ako je jos uvijek opcija 'izaberi', sakrivamo kontejner s opcijama
        else {
            document.getElementById("optionsForm").style.display = "none";
        }

        // update stanja
        this.setState({
            select: e.target.value,
            optionList: makeOptionList
        });
    }

    // funkcija koja sluzi za prikazivanje inputa za unos kolicine zeljene vrste cvijeca
    handleFlowerNumber(e) {
        //provjeravamo je li označen radio/checkbox
        let isChecked = e.target.checked;
        //samo ukoliko se radi o checkboxu otkrivamo input za unos kolicine pojedine vrste cvijeta
        if (isChecked && e.target.type !== "radio")
            document.getElementById(e.target.value + "ID").querySelector("span").style.display = "inline";
        else if (!isChecked && e.target.type !== "radio")
            document.getElementById(e.target.value + "ID").querySelector("span").style.display = "none";
    }

    render() {
        return (

            <div className={styles.Container}>
                <div className={styles.MainPhoto}>
                    <img alt="photoThumb" src={mainphoto}></img>
                    <div className={styles.cardForm}>

                        <h1>SLOŽI SVOJ BUKET</h1>

                        <h4>OPCIJA:</h4>
                        <select onChange={this.handleOption.bind(this)} value={this.state.select}>
                            <option id="chooseOption" value="select">Izaberi</option>
                            <option value="one">Jedna vrsta</option>
                            <option value="many" >Raznovrsno</option>
                        </select>

                        <form id="optionsForm" className={styles.OptionsForm}>
                            <div className={styles.OptionsList}>
                                {this.state.optionList}
                            </div>
                            <div key="oneCountKey" id="oneFlowerCount" className={styles.oneFlowerCount}>
                                Količina: <input type="number" defaultValue="0"></input>
                            </div>
                            <button className={styles.ShopNowBtn}>NARUČI</button>
                        </form>
                    </div>
                </div>
            </div>


        );
    }
}
export default Custom;