import React from 'react';
import { Button, ButtonGroup, MenuItem, Select, Accordion, Card, TextField, Typography, AccordionDetails, AccordionSummary } from '@material-ui/core';
import { ExpandMoreOutlined } from '@material-ui/icons';

export default class Romb extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bok: '',
            obwod: '',
            pole: '',
            przekatnaA: '',
            przekatnaB: '',
            wysokosc: '',
            katA: '',
            katB: '',
            bokJedn: { title: 'cm', wart: 10 },
            poleJedn: { title: 'cm2', wart: 100 },
            obwodJedn: { title: 'cm', wart: 10 },
            przekatnaJednA: { title: 'cm', wart: 10 },
            przekatnaJednB: { title: 'cm', wart: 10 },
            wysokoscJedn: { title: 'cm', wart: 10 },
            pierwszaLiniaBok: '',
            drugaLiniaBok: '',
            pierwszaLiniaPole: '',
            drugaLiniaPole: '',
            pierwszaLiniaObwod: '',
            drugaLiniaObwod: '',
            pierwszaLiniaPrzekatnaA: '',
            drugaLiniaPrzekatnaA: '',
            pierwszaLiniaPrzekatnaB: '',
            drugaLiniaPrzekatnaB: '',
            pierwszaLiniaWysokosc: '',
            drugaLiniaWysokosc: '',
            pierwszaLiniaKatA: '',
            pierwszaLiniaKatB: '',
        }
    }


    changeBok(number) {
        try {
            if (!number) {
                this.setState({ bok: number });
            }
            else if (number > -2000 && number < 2000) {

                this.setState({ bok: number });
            }
            else {
                if (number < 0) {
                    this.setState({ bok: number.substring(0, number.length - 1) });
                }
                else {
                    this.setState({ bok: number.substring(0, number.length - 1) });
                }
            }
        }
        catch (e) { }
    }

    changeObwod = (number) => {
        try {
            if (!number) {
                this.setState({ obwod: number });
            }
            else if (number > -2000 && number < 2000) {

                this.setState({ obwod: number });
            }
            else {
                if (number < 0) {
                    this.setState({ obwod: number.substring(0, number.length - 1) });
                }
                else {
                    this.setState({ obwod: number.substring(0, number.length - 1) });
                }
            }
        }
        catch (e) { }
    };
    changePole = (number) => {
        try {
            if (!number) {
                this.setState({ pole: number });
            }
            else if (number > -2000 && number < 2000) {

                this.setState({ pole: number });
            }
            else {
                if (number < 0) {
                    this.setState({ pole: number.substring(0, number.length - 1) });
                }
                else {
                    this.setState({ pole: number.substring(0, number.length - 1) });
                }
            }
        }
        catch (e) { }
    };
    changePrzekatnaA = (number) => {
        try {
            if (!number) {
                this.setState({ przekatnaA: number });
            }
            else if (number > -2000 && number < 2000) {

                this.setState({ przekatnaA: number });
            }
            else {
                if (number < 0) {
                    this.setState({ przekatnaA: number.substring(0, number.length - 1) });
                }
                else {
                    this.setState({ przekatnaA: number.substring(0, number.length - 1) });
                }
            }
        }
        catch (e) { }
    };

    changePrzekatnaB = (number) => {
        try {
            if (!number) {
                this.setState({ przekatnaB: number });
            }
            else if (number > -2000 && number < 2000) {

                this.setState({ przekatnaB: number });
            }
            else {
                if (number < 0) {
                    this.setState({ przekatnaB: number.substring(0, number.length - 1) });
                }
                else {
                    this.setState({ przekatnaB: number.substring(0, number.length - 1) });
                }
            }
        }
        catch (e) { }
    };

    changeWysokosc = (number) => {
        try {
            if (!number) {
                this.setState({ wysokosc: number });
            }
            else if (number > -2000 && number < 2000) {

                this.setState({ wysokosc: number });
            }
            else {
                if (number < 0) {
                    this.setState({ wysokosc: number.substring(0, number.length - 1) });
                }
                else {
                    this.setState({ wysokosc: number.substring(0, number.length - 1) });
                }
            }
        }
        catch (e) { }
    };

    changeKatA = (number) => {
        try {
            if (!number) {
                this.setState({ katA: number });
            }
            else if (number > -2000 && number < 2000) {

                this.setState({ katA: number });
            }
            else {
                if (number < 0) {
                    this.setState({ katA: number.substring(0, number.length - 1) });
                }
                else {
                    this.setState({ katA: number.substring(0, number.length - 1) });
                }
            }
        }
        catch (e) { }
    };

    changeKatB = (number) => {
        try {
            if (!number) {
                this.setState({ katB: number });
            }
            else if (number > -2000 && number < 2000) {

                this.setState({ katB: number });
            }
            else {
                if (number < 0) {
                    this.setState({ katB: number.substring(0, number.length - 1) });
                }
                else {
                    this.setState({ katB: number.substring(0, number.length - 1) });
                }
            }
        }
        catch (e) { }
    };

    changeJednBok = (newOne, wart) => {
        this.setState({ bokJedn: { title: newOne, wart: wart } });
    }
    changeJednPole = (newOne, wart) => {
        this.setState({ poleJedn: { title: newOne, wart: wart } });
    }
    changeJednObwod = (newOne, wart) => {
        this.setState({ obwodJedn: { title: newOne, wart: wart } });
    }
    changeJednPrzekatnaA = (newOne, wart) => {
        this.setState({ przekatnaJednA: { title: newOne, wart: wart } });
    }
    changeJednPrzekatnaB = (newOne, wart) => {
        this.setState({ przekatnaJednB: { title: newOne, wart: wart } });
    }
    changeJednWysokosc = (newOne, wart) => {
        this.setState({ wysokoscJedn: { title: newOne, wart: wart } });
    }


    clearAllFields = () => {
        this.changeBok('');
        this.changeObwod('')
        this.changePole('');
        this.changePrzekatnaA('');
        this.changePrzekatnaB('');
        this.changeWysokosc('');
        this.changeKatA('');
        this.changeKatB('');
        this.changeJednBok('cm', 10)
        this.changeJednObwod('cm', 10)
        this.changeJednPole('cm2', 100)
        this.changeJednPrzekatnaA('cm', 10)
        this.changeJednPrzekatnaB('cm', 10)
        this.changeJednWysokosc('cm', 10)
        this.setState({
            pierwszaLiniaBok: '',
            drugaLiniaBok: '',
            pierwszaLiniaPole: '',
            drugaLiniaPole: '',
            pierwszaLiniaObwod: '',
            drugaLiniaObwod: '',
            pierwszaLiniaPrzekatnaA: '',
            drugaLiniaPrzekatnaA: '',
            pierwszaLiniaPrzekatnaB: '',
            drugaLiniaPrzekatnaB: '',
            pierwszaLiniaWysokosc: '',
            drugaLiniaWysokosc: '',
            pierwszaLiniaKatA: '',
            pierwszaLiniaKatB: '',
        });
    }

    calculateRest = () => {

        if (this.state.bok !== '' && this.state.wysokosc !== '') {
            this.setState({

                obwod: 4 * this.state.bok * this.state.bokJedn.wart / this.state.obwodJedn.wart,
                pole: this.state.bok * this.state.wysokosc * this.state.bokJedn.wart * this.state.wysokoscJedn.wart / this.state.poleJedn.wart,

                pierwszaLiniaPole: "P=a*h", drugaLiniaPole: "",
                pierwszaLiniaObwod: 'Ob=4*a', drugaLiniaObwod: "",
                pierwszaLiniaPrzekatnaA: '', drugaLiniaPrzekatnaA: "", pierwszaLiniaPrzekatnaB: '', drugaLiniaPrzekatnaB: "",
                pierwszaLiniaBok: '', drugaLiniaBok: '', pierwszaLiniaWysokosc: '', drugaLiniaWysokosc: '',
                pierwszaLiniaKatA: '', pierwszaLiniaKatB: '',
            });
        }
        else if (this.state.obwod !== '' && this.state.wysokosc !== '') {
            this.setState({

                bok: this.state.obwod / 4 * this.state.obwodJedn.wart / this.state.bokJedn.wart,
                pole: this.state.obwod * this.state.obwodJedn.wart / 4 * this.state.obwod / 4 * this.state.obwodJedn.wart / this.state.poleJedn.wart,

                pierwszaLiniaPole: "a=Ob/4", drugaLiniaPole: "P=a*h",
                pierwszaLiniaObwod: '', drugaLiniaObwod: "",
                pierwszaLiniaPrzekatnaA: '', drugaLiniaPrzekatnaA: "", pierwszaLiniaPrzekatnaB: '', drugaLiniaPrzekatnaB: "",
                pierwszaLiniaBok: 'a=Ob/4', drugaLiniaBok: '', pierwszaLiniaWysokosc: '', drugaLiniaWysokosc: '',
                pierwszaLiniaKatA: '', pierwszaLiniaKatB: '',
            });
        }
        else if (this.state.pole !== '' && this.state.wysokosc !== '') {
            let bok = this.state.pole * this.state.poleJedn.wart / this.state.wysokosc / this.state.wysokoscJedn.wart / this.state.bokJedn.wart;
            this.setState({

                bok: bok,
                obwod: 4 * bok * this.state.bokJedn.wart / this.state.obwodJedn.wart,

                pierwszaLiniaPole: "", drugaLiniaPole: "",
                pierwszaLiniaObwod: 'a=P/h', drugaLiniaObwod: "Ob=4*a",
                pierwszaLiniaPrzekatnaA: '', drugaLiniaPrzekatnaA: "", pierwszaLiniaPrzekatnaB: '', drugaLiniaPrzekatnaB: "",
                pierwszaLiniaBok: 'a=P/h', drugaLiniaBok: '', pierwszaLiniaWysokosc: '', drugaLiniaWysokosc: '',
                pierwszaLiniaKatA: '', pierwszaLiniaKatB: '',
            });
        }
        else if (this.state.pole !== '' && this.state.bok !== '') {
            let wysokosc = this.state.pole * this.state.poleJedn.wart / this.state.bok / this.state.bokJedn.wart / this.state.wysokoscJedn.wart;
            this.setState({

                obwod: 4 * this.state.bok * this.state.bokJedn.wart / this.state.obwodJedn.wart,
                wysokosc: wysokosc,

                pierwszaLiniaPole: "", drugaLiniaPole: "",
                pierwszaLiniaObwod: 'a=P/h', drugaLiniaObwod: "Ob=4*a",
                pierwszaLiniaPrzekatnaA: '', drugaLiniaPrzekatnaA: "", pierwszaLiniaPrzekatnaB: '', drugaLiniaPrzekatnaB: "",
                pierwszaLiniaBok: 'a=P/h', drugaLiniaBok: '', pierwszaLiniaWysokosc: '', drugaLiniaWysokosc: '',
                pierwszaLiniaKatA: '', pierwszaLiniaKatB: '',
            });
        }
        else if (this.state.przekatnaA !== '' && this.state.przekatnaB !== '') {
            let bok = Math.sqrt((this.state.przekatnaA * this.state.przekatnaJednA.wart * this.state.przekatnaJednA.wart / 2 *
                this.state.przekatnaA / 2) +
                (this.state.przekatnaB / 2 * this.state.przekatnaJednB.wart * this.state.przekatnaJednB.wart * this.state.przekatnaB / 2)) /
                this.state.bokJedn.wart;

            let pole = this.state.przekatnaA * this.state.przekatnaB / 2 * this.state.przekatnaJednA.wart * this.state.przekatnaJednB.wart /
                this.state.poleJedn.wart;

            this.setState({

                bok: bok,
                obwod: 4 * bok * this.state.bokJedn.wart / this.state.obwodJedn.wart,
                pole: pole,
                wysokosc: pole * this.state.poleJedn.wart / bok / this.state.bokJedn.wart / this.state.wysokoscJedn.wart,
                katA: 2 * Math.round(Math.asin(this.state.przekatnaA * this.state.przekatnaJednA.wart / 2 / bok / this.state.bokJedn.wart)
                    * 180 / Math.PI * 100) / 100,
                katB: 2 * Math.round(Math.asin(this.state.przekatnaB * this.state.przekatnaJednB.wart / 2 / bok / this.state.bokJedn.wart)
                    * 180 / Math.PI * 100) / 100,

                pierwszaLiniaPole: "P=(d_1*d_2)/2", drugaLiniaPole: "",
                pierwszaLiniaBok: 'a=sqrt((d_1/2)^2+(d_2/2)^2)', drugaLiniaBok: "",
                pierwszaLiniaPrzekatnaA: '', drugaLiniaPrzekatnaA: "", pierwszaLiniaPrzekatnaB: '', drugaLiniaPrzekatnaB: "",
                pierwszaLiniaObwod: 'Ob=4*a', drugaLiniaBok: '', pierwszaLiniaWysokosc: 'h=P/a', drugaLiniaWysokosc: '',
                pierwszaLiniaKatA: '(sin_alfa)=((d_1)/2)/a', pierwszaLiniaKatB: '(sin_beta)=((d_2)/2)/a',
            });
        }
        else if ((this.state.przekatnaA !== '' || this.state.przekatnaB !== '') && this.state.pole !== '') {

            let przekatnaA = this.state.przekatnaA !== '' ? this.state.przekatnaA : 2 * this.state.pole * this.state.poleJedn.wart
                / this.state.przekatnaB / this.state.przekatnaJednB.wart / this.state.przekatnaJednA.wart;

            let przekatnaB = this.state.przekatnaB !== '' ? this.state.przekatnaB : 2 * this.state.pole * this.state.poleJedn.wart
                / this.state.przekatnaA / this.state.przekatnaJednA.wart / this.state.przekatnaJednB.wart;

            let bok = Math.sqrt((przekatnaA * this.state.przekatnaJednA.wart * this.state.przekatnaJednA.wart / 2 * przekatnaA / 2) +
                (przekatnaB / 2 * this.state.przekatnaJednB.wart * this.state.przekatnaJednB.wart * przekatnaB / 2)) /
                this.state.bokJedn.wart;

            this.setState({

                bok: bok,
                obwod: 4 * bok * this.state.bokJedn.wart / this.state.obwodJedn.wart,
                wysokosc: this.state.pole * this.state.poleJedn.wart / bok / this.state.bokJedn.wart / this.state.wysokoscJedn.wart,
                przekatnaA: przekatnaA,
                przekatnaB: przekatnaB,
                katA: 2 * Math.round(Math.asin(przekatnaA * this.state.przekatnaJednA.wart / 2 / bok / this.state.bokJedn.wart)
                    * 180 / Math.PI * 100) / 100,
                katB: 2 * Math.round(Math.asin(przekatnaB * this.state.przekatnaJednB.wart / 2 / bok / this.state.bokJedn.wart)
                    * 180 / Math.PI * 100) / 100,

                pierwszaLiniaPole: "", drugaLiniaPole: "",
                pierwszaLiniaBok: 'a=sqrt((d_1/2)^2+(d_2/2)^2)', drugaLiniaBok: "",
                pierwszaLiniaPrzekatnaA: 'd_1=P/d_2', drugaLiniaPrzekatnaA: "", pierwszaLiniaPrzekatnaB: 'd_2=P/d_1', drugaLiniaPrzekatnaB: "",
                pierwszaLiniaObwod: 'Ob=4*a', drugaLiniaBok: '', pierwszaLiniaWysokosc: 'h=P/a', drugaLiniaWysokosc: '',
                pierwszaLiniaKatA: '(sin_alfa)=((d_1)/2)/a', pierwszaLiniaKatB: '(sin_beta)=((d_2)/2)/a',
            });
        }
        else if ((this.state.katA !== '' || this.state.katB !== '') && this.state.bok !== '') {
            let katA = this.state.katA !== '' ? this.state.katA : 180 - this.state.katB;
            let katB = this.state.katB !== '' ? this.state.katB : 180 - this.state.katA;
            const sinus = Math.sin(katA / 2 * Math.PI / 180);
            const cosinus = Math.cos(katA / 2 * Math.PI / 180);
            let d_1 = 2 * this.state.bok * this.state.bokJedn.wart * sinus / this.state.przekatnaJednA.wart;
            let d_2 = 2 * this.state.bok * this.state.bokJedn.wart * cosinus / this.state.przekatnaJednB.wart;

            let pole = d_1 * this.state.przekatnaJednA.wart * d_2 * this.state.przekatnaJednB.wart / 2 / this.state.poleJedn.wart;

            this.setState({
                obwod: 4 * this.state.bok * this.state.bokJedn.wart / this.state.obwodJedn.wart,
                wysokosc: pole * this.state.poleJedn.wart / this.state.bok / this.state.bokJedn.wart / this.state.wysokoscJedn.wart,
                pole: pole,
                przekatnaA: d_1,
                przekatnaB: d_2,
                katA: katA,
                katB: katB,

                pierwszaLiniaPole: "P=(d_1*d_2)/2", drugaLiniaPole: "",
                pierwszaLiniaBok: '', drugaLiniaBok: "",
                pierwszaLiniaPrzekatnaA: 'd_1/2=a*sin_(alfa/2)', drugaLiniaPrzekatnaA: "", pierwszaLiniaPrzekatnaB: 'd_2/2=a*cos_(alfa/2)',
                drugaLiniaPrzekatnaB: "",
                pierwszaLiniaObwod: 'Ob=4*a', drugaLiniaBok: '', pierwszaLiniaWysokosc: 'h=P/a', drugaLiniaWysokosc: '',
                pierwszaLiniaKatA: '', pierwszaLiniaKatB: 'beta=180-alfa',
            });
        }
        else if ((this.state.katA !== '' || this.state.katB !== '') && this.state.obwod !== '') {
            let katA = this.state.katA !== '' ? this.state.katA : 180 - this.state.katB;
            let katB = this.state.katB !== '' ? this.state.katB : 180 - this.state.katA;
            const sinus = Math.sin(katA / 2 * Math.PI / 180);
            const cosinus = Math.cos(katA / 2 * Math.PI / 180);
            let bok = this.state.obwod.this.state.obwodJedn.wart / 4 / this.state.bokJedn.wart;
            let d_1 = 2 * bok * this.state.bokJedn.wart * sinus / this.state.przekatnaJednA.wart;
            let d_2 = 2 * bok * this.state.bokJedn.wart * cosinus / this.state.przekatnaJednB.wart;

            let pole = d_1 * this.state.przekatnaJednA.wart * d_2 * this.state.przekatnaJednB.wart / 2 / this.state.poleJedn.wart;

            this.setState({
                bok: bok,
                wysokosc: pole * this.state.poleJedn.wart / bok / this.state.bokJedn.wart / this.state.wysokoscJedn.wart,
                pole: pole,
                przekatnaA: d_1,
                przekatnaB: d_2,
                katA: katA,
                katB: katB,

                pierwszaLiniaPole: "P=(d_1*d_2)/2", drugaLiniaPole: "",
                pierwszaLiniaBok: 'a=Ob/4', drugaLiniaBok: "",
                pierwszaLiniaPrzekatnaA: 'd_1/2=a*sin_(alfa/2)', drugaLiniaPrzekatnaA: "", pierwszaLiniaPrzekatnaB: 'd_2/2=a*cos_(alfa/2)',
                drugaLiniaPrzekatnaB: "",
                pierwszaLiniaObwod: '', drugaLiniaBok: '', pierwszaLiniaWysokosc: 'h=P/a', drugaLiniaWysokosc: '',
                pierwszaLiniaKatA: '', pierwszaLiniaKatB: 'beta=180-alfa',
            });
        }
        else if ((this.state.katA !== '' || this.state.katB !== '') && this.state.przekatnaA !== '') {
            let katA = this.state.katA !== '' ? this.state.katA : 180 - this.state.katB;
            let katB = this.state.katB !== '' ? this.state.katB : 180 - this.state.katA;
            const sinus = Math.sin(katA / 2 * Math.PI / 180);
            const cosinus = Math.cos(katA / 2 * Math.PI / 180);
            let bok = this.state.przekatnaA * this.state.przekatnaJednA.wart / 2 / sinus / this.state.bokJedn.wart;
            let d_2 = 2 * bok * this.state.bokJedn.wart * cosinus / this.state.przekatnaJednB.wart;

            let pole = this.state.przekatnaA * this.state.przekatnaJednA.wart * d_2 * this.state.przekatnaJednB.wart / 2 / this.state.poleJedn.wart;

            this.setState({
                bok: bok,
                obwod: 4 * bok * this.state.bokJedn.wart / this.state.obwodJedn.wart,
                wysokosc: pole * this.state.poleJedn.wart / bok / this.state.bokJedn.wart / this.state.wysokoscJedn.wart,
                pole: pole,
                przekatnaB: d_2,
                katA: katA,
                katB: katB,

                pierwszaLiniaPole: "P=(d_1*d_2)/2", drugaLiniaPole: "",
                pierwszaLiniaBok: 'a=((d_1)/2)/sin_(alfa/2)', drugaLiniaBok: "",
                pierwszaLiniaPrzekatnaA: '', drugaLiniaPrzekatnaA: "", pierwszaLiniaPrzekatnaB: 'd_2/2=a*cos_(alfa/2)',
                drugaLiniaPrzekatnaB: "",
                pierwszaLiniaObwod: 'Ob=4*a', drugaLiniaBok: '', pierwszaLiniaWysokosc: 'h=P/a', drugaLiniaWysokosc: '',
                pierwszaLiniaKatA: '', pierwszaLiniaKatB: 'beta=180-alfa',
            });
        }
        else if ((this.state.katA !== '' || this.state.katB !== '') && this.state.przekatnaB !== '') {
            let katA = this.state.katA !== '' ? this.state.katA : 180 - this.state.katB;
            let katB = this.state.katB !== '' ? this.state.katB : 180 - this.state.katA;
            const sinus = Math.sin(katA / 2 * Math.PI / 180);
            const cosinus = Math.cos(katA / 2 * Math.PI / 180);
            let bok = this.state.przekatnaB * this.state.przekatnaJednB.wart / 2 / cosinus / this.state.bokJedn.wart;
            let d_1 = 2 * bok * this.state.bokJedn.wart * sinus / this.state.przekatnaJednB.wart;

            let pole = this.state.przekatnaB * this.state.przekatnaJednB.wart * d_1 * this.state.przekatnaJednA.wart / 2 / this.state.poleJedn.wart;

            this.setState({
                bok: bok,
                obwod: 4 * bok * this.state.bokJedn.wart / this.state.obwodJedn.wart,
                wysokosc: pole * this.state.poleJedn.wart / bok / this.state.bokJedn.wart / this.state.wysokoscJedn.wart,
                pole: pole,
                przekatnaA: d_1,
                katA: katA,
                katB: katB,

                pierwszaLiniaPole: "P=(d_1*d_2)/2", drugaLiniaPole: "",
                pierwszaLiniaBok: 'a=((d_2)/2)/cos_(alfa/2)', drugaLiniaBok: "",
                pierwszaLiniaPrzekatnaA: 'd_1/2=a*sin_(alfa/2)', drugaLiniaPrzekatnaA: "", pierwszaLiniaPrzekatnaB: '',
                drugaLiniaPrzekatnaB: "",
                pierwszaLiniaObwod: 'Ob=4*a', drugaLiniaBok: '', pierwszaLiniaWysokosc: 'h=P/a', drugaLiniaWysokosc: '',
                pierwszaLiniaKatA: '', pierwszaLiniaKatB: 'beta=180-alfa',
            });
        }
    }

    render() {
        return (
            <div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <div style={{ marginRight: '50px', marginTop: '5px' }}>Bok</div>
                    <div style={{ marginRight: '50px' }}><TextField type="number" key='1' placeholder="Bok" step="0.1" value={this.state.bok}
                        className="inputTrygo" onChange={(value) => this.changeBok(value.target.value)} /></div>
                    <Select
                        value={this.state.bokJedn.title}
                        onChange={(value) => this.changeJednBok(value.target.value)}
                    >
                        <MenuItem value='mm'>mm</MenuItem>
                        <MenuItem value='cm'>cm</MenuItem>
                        <MenuItem value='dm'>dm</MenuItem>
                        <MenuItem value='m'>m</MenuItem>
                    </Select>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <div style={{ marginRight: '50px', marginTop: '5px' }}>Obwód</div>
                    <div style={{ marginRight: '50px' }}><TextField type="number" placeholder="Obwód" step="0.1" value={this.state.obwod}
                        onChange={(value) => this.changeObwod(value.target.value)} /></div>
                    <Select
                        value={this.state.obwodJedn.title}
                        onChange={(value) => this.changeJednObwod(value.target.value)}
                    >
                        <MenuItem value='mm'>mm</MenuItem>
                        <MenuItem value='cm'>cm</MenuItem>
                        <MenuItem value='dm'>dm</MenuItem>
                        <MenuItem value='m'>m</MenuItem>
                    </Select>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <div style={{ marginRight: '50px', marginTop: '5px' }}>Pole</div>
                    <div style={{ marginRight: '50px' }}><TextField type="number" placeholder="Pole" step="0.1" value={this.state.pole}
                        onChange={(value) => this.changePole(value.target.value)} /></div>
                    <Select
                        value={this.state.poleJedn.title}
                        onChange={(value) => this.changeJednPole(value.target.value)}
                    >
                        <MenuItem value='mm2'>mm2</MenuItem>
                        <MenuItem value='cm2'>cm2</MenuItem>
                        <MenuItem value='dm2'>dm2</MenuItem>
                        <MenuItem value='m2'>m2</MenuItem>
                    </Select>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <div style={{ marginRight: '50px', marginTop: '5px' }}>Wysokość</div>
                    <div style={{ marginRight: '50px' }}><TextField type="number" placeholder="Wysokość" step="0.1" value={this.state.wysokosc}
                        onChange={(value) => this.changeWysokosc(value.target.value)} /></div>
                    <Select
                        value={this.state.wysokoscJedn.title}
                        onChange={(value) => this.changeJednWysokosc(value.target.value)}
                    >
                        <MenuItem value='mm'>mm</MenuItem>
                        <MenuItem value='cm'>cm</MenuItem>
                        <MenuItem value='dm'>dm</MenuItem>
                        <MenuItem value='m'>m</MenuItem>
                    </Select>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <div style={{ marginRight: '50px', marginTop: '5px' }}>Krótsza przekątna</div>
                    <div style={{ marginRight: '50px' }}><TextField type="number" placeholder="Krótsza przekątna" step="0.1" value={this.state.przekatnaA}
                        onChange={(value) => this.changePrzekatnaA(value.target.value)} /></div>
                    <Select
                        value={this.state.przekatnaJednA.title}
                        onChange={(value) => this.changeJednPrzekatnaA(value.target.value)}
                    >
                        <MenuItem value='mm'>mm</MenuItem>
                        <MenuItem value='cm'>cm</MenuItem>
                        <MenuItem value='dm'>dm</MenuItem>
                        <MenuItem value='m'>m</MenuItem>
                    </Select>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <div style={{ marginRight: '50px', marginTop: '5px' }}>Dłuższa przekątna</div>
                    <div style={{ marginRight: '50px' }}><TextField type="number" placeholder="Dłuższa przekątna" step="0.1" value={this.state.przekatnaB}
                        onChange={(value) => this.changePrzekatnaB(value.target.value)} /></div>
                    <Select
                        value={this.state.przekatnaJednB.title}
                        onChange={(value) => this.changeJednPrzekatnaB(value.target.value)}
                    >
                        <MenuItem value='mm'>mm</MenuItem>
                        <MenuItem value='cm'>cm</MenuItem>
                        <MenuItem value='dm'>dm</MenuItem>
                        <MenuItem value='m'>m</MenuItem>
                    </Select>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <div style={{ marginRight: '50px', marginTop: '5px' }}>Kąt ostry</div>
                    <div style={{ marginRight: '50px' }}><TextField type="number" placeholder="Kąt ostry" step="0.1" value={this.state.katA}
                        onChange={(value) => this.changeKatA(value.target.value)} /></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <div style={{ marginRight: '50px', marginTop: '5px' }}>Kąt rozwarty</div>
                    <div style={{ marginRight: '50px' }}><TextField type="number" placeholder="Kąt rozwarty" step="0.1" value={this.state.katB}
                        onChange={(value) => this.changeKatB(value.target.value)} /></div>
                </div>

                <ButtonGroup aria-label="Basic example">
                    <Button variant="primary" type="submit">
                        Oblicz
                    </Button>
                    <Button variant="primary" type="button" onClick={this.clearAllFields}>
                        Wyczyść
                    </Button>
                </ButtonGroup>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreOutlined />}
                        aria-controls="panel1a-content"
                    >
                        <Typography >Bok</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>{this.state.pierwszaLiniaBok}</p>
                            <p>{this.state.drugaLiniaBok}</p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreOutlined />}
                        aria-controls="panel1a-content"
                    >
                        <Typography >Obwód</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>{this.state.pierwszaLiniaBokObwod}</p>
                            <p>{this.state.drugaLiniaBokObwod}</p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreOutlined />}
                        aria-controls="panel1a-content"
                    >
                        <Typography >Pole</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>{this.state.pierwszaLiniaPole}</p>
                            <p>{this.state.drugaLiniaPole}</p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreOutlined />}
                        aria-controls="panel1a-content"
                    >
                        <Typography >Wysokość</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>{this.state.pierwszaLiniaWysokosc}</p>
                            <p>{this.state.drugaLiniaWysokosc}</p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreOutlined />}
                        aria-controls="panel1a-content"
                    >
                        <Typography >Krótsza przekątna</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>{this.state.pierwszaLiniaPrzekatnaA}</p>
                            <p>{this.state.drugaLiniaPrzekatnaA}</p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreOutlined />}
                        aria-controls="panel1a-content"
                    >
                        <Typography >Dłuższy przekątna</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>{this.state.pierwszaLiniaPrzekatnaB}</p>
                            <p>{this.state.drugaLiniaPrzekatnaB}</p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreOutlined />}
                        aria-controls="panel1a-content"
                    >
                        <Typography >Kąt ostry</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>{this.state.pierwszaLiniaKatA}</p>
                            <p>{this.state.drugaLiniaKatA}</p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreOutlined />}
                        aria-controls="panel1a-content"
                    >
                        <Typography >Kąt rozwarty</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>{this.state.pierwszaLiniaKatB}</p>
                            <p>{this.state.drugaLiniaKatB}</p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        );
    }
}