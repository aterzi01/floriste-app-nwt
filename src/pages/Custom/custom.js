import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import styles from './styles.module.css';
import mainphoto from '../../assets/img/custom.jpg';

class Custom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'select'
        }
    }

    handleOption(e) {
        this.setState({
            value: e.target.value
        });

        document.getElementById("chooseOption").style.display = "none";
        document.getElementById("oneFlowerCount").style.display = "none";
        let manyDiv = document.getElementById("manyFlowerCount");
        manyDiv.style.display = "none";
        for (let i of manyDiv.querySelectorAll("div")) {
            i.style.display = "none";
        }

        if (e.target.value === "many") {
            let form = document.getElementById("optionsForm");
            form.style.display = "block";
            let inputs = form.querySelectorAll(".flowerCheck");
            for (let i of inputs) {
                i.type = "checkbox";
                i.checked = false;

            }
            manyDiv.style.display = "block";
        }
        else if (e.target.value === "one") {
            let form = document.getElementById("optionsForm");
            form.style.display = "block";
            let inputs = form.querySelectorAll(".flowerCheck");
            for (let i of inputs) {
                i.type = "radio";
                i.checked = false;

            }
            document.getElementById("oneFlowerCount").style.display = "block";
        }
        else {
            let form = document.getElementById("optionsForm");
            form.style.display = "none";
        }
    }

    handleFlowerNumber(e) {
        let isChecked = e.target.checked;
        let ID = e.target.value + "ID";
        let form = document.getElementById("manyFlowerCount");
        console.log(e.target.type)

        if (isChecked && e.target.type !== "radio") {
            if (!form.querySelector("#" + ID)) {
                let newDiv = document.createElement("div");

                let textnode = document.createTextNode("Količina (" + e.target.value + ")");
                newDiv.appendChild(textnode);

                let inputNumber = document.createElement("input");
                inputNumber.type = "number";
                inputNumber.defaultValue = "0";
                inputNumber.id = ID;
                newDiv.appendChild(inputNumber);

                form.appendChild(newDiv);
            }
            else {
                let inputNumber = form.querySelector("#" + ID).parentElement;
                inputNumber.style.display = "block";
            }
        }
        else if (!isChecked && e.target.type !== "radio") {
            if (form.querySelector("#" + ID)) {
                let inputNumber = form.querySelector("#" + ID).parentElement;
                inputNumber.style.display = "none";
            }
        }

    }
    render() {
        return (

            <div className={styles.Container}>
                <div className={styles.MainPhoto}>
                    <img alt="photoThumb" src={mainphoto}></img>
                    <div className={styles.cardForm}>

                        <h1>SLOŽI SVOJ BUKET</h1>

                        <h4>OPCIJA:</h4>
                        <select onChange={this.handleOption.bind(this)} value={this.state.value}>
                            <option id="chooseOption" value="select">Izaberi</option>
                            <option value="one">Jedna vrsta</option>
                            <option value="many" >Raznovrsno</option>


                        </select>
                        <form id="optionsForm" className={styles.OptionsForm}>
                            <input className="flowerCheck" value="ruze" name="flowerCheck" type="" onChange={this.handleFlowerNumber} />Ruže
                            <input className="flowerCheck" value="tulipani" name="flowerCheck" type="" onChange={this.handleFlowerNumber} />Tulipani
                            <input className="flowerCheck" value="orhideje" name="flowerCheck" type="" onChange={this.handleFlowerNumber} />Orhideje
                            <input className="flowerCheck" value="tratincice" name="flowerCheck" type="" onChange={this.handleFlowerNumber} />Tratinčice

                            <div id="oneFlowerCount" className={styles.oneFlowerCount}>
                                Količina: <input type="number" defaultValue="0"></input>
                            </div>

                            <div id="manyFlowerCount" className={styles.manyFlowerCount}>

                            </div>
                        </form>
                    </div>
                </div>
            </div>


        );
    }
}
export default Custom;