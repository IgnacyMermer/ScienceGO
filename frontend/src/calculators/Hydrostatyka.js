import React from 'react';
import { Button, ButtonGroup, MenuItem, Select, Accordion, Card, TextField, Typography, AccordionDetails, AccordionSummary } from '@material-ui/core';
import { ExpandMoreOutlined } from '@material-ui/icons';

export default class CisnienieHydro extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cisnienie: '',
            wysokosc: '',
            gestosc: '',
            silaWyporu: '',
            sila1: '',
            sila2: '',
            masa: '',
            masa1: '',
            masa2: '',
            przesuniecie: '',
            powierzchnia1: '',
            powierzchnia2: '',
            cisnienieAtm: '',

            cisnienieJedn: { title: 'Pa', wart: 1 },
            cisnienieAtmJedn: { title: 'Pa', wart: 1 },
            masaJedn: { title: 'kg', wart: 1 },
            masa1Jedn: { title: 'kg', wart: 1 },
            masa2Jedn: { title: 'kg', wart: 1 },
            powierzchnia1Jedn: { title: 'm2', wart: 1 },
            powierzchnia2Jedn: { title: 'm2', wart: 1 },
            sila1Jedn: { title: 'N', wart: 1 },
            sila2Jedn: { title: 'N', wart: 1 },
            silaWyporuJedn: { title: 'N', wart: 1 },
            wysokoscJedn: { title: 'm', wart: 1 },
            przesuniecieJedn: { title: 'm', wart: 1 },
            gestoscJedn: { title: 'kg/m3', wart: 1 },

            pierwszaLiniaCisnienie: '',
            drugaLiniaCisnienie: '',
            trzeciaLiniaCisnienie: '',
            czwartaLiniaCisnienie: '',
            pierwszaLiniaMasa: '',
            drugaLiniaMasa: '',
            trzeciaLiniaMasa: '',
            czwartaLiniaMasa: '',
            pierwszaLiniaPowierzchnia: '',
            drugaLiniaPowierzchnia: '',
            trzeciaLiniaPowierzchnia: '',
            czwartaLiniaPowierzchnia: '',
            pierwszaLiniaSila: '',
            drugaLiniaSila: '',
            trzeciaLiniaSila: '',
            czwartaLiniaSila: '',
            pierwszaLiniaSilaWyporu: '',
            drugaLiniaSilaWyporu: '',
            trzeciaLiniaSilaWyporu: '',
            czwartaLiniaSilaWyporu: '',
        }
    }


    changeCisnienie(number) {
        try {
            this.setState({ cisnienie: number });
        }
        catch (e) { }
    }

    changeGestosc = (number) => {
        try {
            this.setState({ gestosc: number });
        }
        catch (e) { }
    };
    changeWysokosc = (number) => {
        try {
            this.setState({ wysokosc: number });
        }
        catch (e) { }
    };
    changeMasa = (number) => {
        try {
            this.setState({ masa: number });
        }
        catch (e) { }
    };
    changeCisnienieAtm = (number) => {
        try {
            this.setState({ cisnienieAtm: number });
        }
        catch (e) { }
    }
    changeSilaWyporu = (number) => {
        try {
            this.setState({ silaWyporu: number });
        }
        catch (e) { }
    }
    changeSila1 = (number) => {
        try {
            this.setState({ sila1: number });
        }
        catch (e) { }
    }
    changeSila2 = (number) => {
        try {
            this.setState({ sila2: number });
        }
        catch (e) { }
    }
    changePrzesuniecie = (number) => {
        try {
            this.setState({ przesuniecie: number });
        }
        catch (e) { }
    }
    changePowierzchnia1 = (number) => {
        try {
            this.setState({ powierzchnia1: number });
        }
        catch (e) { }
    }
    changePowierzchnia2 = (number) => {
        try {
            this.setState({ powierzchnia2: number });
        }
        catch (e) { }
    }

    changeJednWysokosc = (newOne, wart) => {
        this.setState({ wysokoscJedn: { title: newOne, wart: wart } });
    }
    changeJednCisnienie = (newOne, wart) => {
        this.setState({ cisnienieJedn: { title: newOne, wart: wart } });
    }
    changeJednGestosc = (newOne, wart) => {
        this.setState({ gestoscJedn: { title: newOne, wart: wart } });
    }
    changeJednMasa = (newOne, wart) => {
        this.setState({ masaJedn: { title: newOne, wart: wart } });
    }
    changeJednCisnienieAtm = (newOne, wart) => {
        this.setState({ cisnienieAtmJedn: { title: newOne, wart: wart } });
    }
    changeJednSilaWyporu = (newOne, wart) => {
        this.setState({ silaWyporuJedn: { title: newOne, wart: wart } });
    }
    changeJednPowierzchnia1 = (newOne, wart) => {
        this.setState({ powierzchnia1Jedn: { title: newOne, wart: wart } });
    }
    changeJednPowierzchnia2 = (newOne, wart) => {
        this.setState({ powierzchnia2Jedn: { title: newOne, wart: wart } });
    }
    changeJednSila1 = (newOne, wart) => {
        this.setState({ sila1Jedn: { title: newOne, wart: wart } });
    }
    changeJednSila2 = (newOne, wart) => {
        this.setState({ sila2Jedn: { title: newOne, wart: wart } });
    }
    changeJednPowierzchnia2 = (newOne, wart) => {
        this.setState({ powierzchnia2Jedn: { title: newOne, wart: wart } });
    }
    changeJednPrzesuniecie = (newOne, wart) => {
        this.setState({ przesuniecieJedn: { title: newOne, wart: wart } });
    }

    clearAllFields = () => {
        this.setState({
            cisnienie: '',
            wysokosc: '',
            gestosc: '',
            silaWyporu: '',
            sila1: '',
            sila2: '',
            masa: '',
            masa1: '',
            masa2: '',
            przesuniecie: '',
            powierzchnia1: '',
            powierzchnia2: '',
            cisnienieAtm: '',

            cisnienieJedn: { title: 'Pa', wart: 1 },
            cisnienieAtmJedn: { title: 'Pa', wart: 1 },
            masaJedn: { title: 'kg', wart: 1 },
            masa1Jedn: { title: 'kg', wart: 1 },
            masa2Jedn: { title: 'kg', wart: 1 },
            powierzchnia1Jedn: { title: 'm2', wart: 1 },
            powierzchnia2Jedn: { title: 'm2', wart: 1 },
            sila1Jedn: { title: 'N', wart: 1 },
            sila2Jedn: { title: 'N', wart: 1 },
            silaWyporuJedn: { title: 'N', wart: 1 },
            wysokoscJedn: { title: 'm', wart: 1 },
            przesuniecieJedn: { title: 'm', wart: 1 },
            gestoscJedn: { title: 'kg/m3', wart: 1 },

            pierwszaLiniaCisnienie: '',
            drugaLiniaCisnienie: '',
            trzeciaLiniaCisnienie: '',
            czwartaLiniaCisnienie: '',
            pierwszaLiniaMasa: '',
            drugaLiniaMasa: '',
            trzeciaLiniaMasa: '',
            czwartaLiniaMasa: '',
            pierwszaLiniaPowierzchnia: '',
            drugaLiniaPowierzchnia: '',
            trzeciaLiniaPowierzchnia: '',
            czwartaLiniaPowierzchnia: '',
            pierwszaLiniaSila: '',
            drugaLiniaSila: '',
            trzeciaLiniaSila: '',
            czwartaLiniaSila: '',
            pierwszaLiniaSilaWyporu: '',
            drugaLiniaSilaWyporu: '',
            trzeciaLiniaSilaWyporu: '',
            czwartaLiniaSilaWyporu: '',
        });
    }

    calculateRest1 = () => {

        if (this.state.cisnienieAtm !== '' && this.state.gestosc !== '' && this.state.wysokosc !== '') {
            this.setState({
                masa: this.state.silaWyporu !== '' ? Math.round((this.state.silaWyporu * this.state.silaWyporuJedn.wart / 9.81) /
                    this.state.masaJedn.wart * 1000) / 1000 : '',
                cisnienie: Math.round(((this.state.gestosc * this.state.gestoscJedn.wart * this.state.wysokosc * this.state.wysokoscJedn.wart *
                    9.81) + this.state.cisnienieAtm * this.state.cisnienieAtmJedn.wart) / this.state.cisnienieJedn.wart * 1000) / 1000,

                pierwszaLiniaCisnienieAtm: "", drugaLiniaCisnienieAtm: "", trzeciaLiniaCisnienieAtm: '', czwartaLiniaCisnienieAtm: '',
                pierwszaLiniaCisnienie: 'P_h=P_a+&ro;*g*h', drugaLiniaCisnienie: "", trzeciaLiniaCisnienie: '', czwartaLiniaCisnienie: '',
                pierwszaLiniaMasa: this.state.silaWyporu !== '' ? 'F_w=&ro;*g*V' : '', drugaLiniaMasa: this.state.silaWyporu !== '' ? "m=&ro;*V" : '',
                trzeciaLiniaMasa: this.state.silaWyporu !== '' ? 'm=F/g' : '', czwartaLiniaMasa: '',
                pierwszaLiniaWysokosc: '', drugaLiniaWysokosc: '', trzeciaLiniaWysokosc: '', czwartaLiniaWysokosc: '',
            });
        }
        else if (this.state.gestosc !== '' && this.state.wysokosc !== '') {
            this.setState({
                masa: this.state.silaWyporu !== '' ? Math.round((this.state.silaWyporu * this.state.silaWyporuJedn.wart / 9.81) /
                    this.state.masaJedn.wart * 1000) / 1000 : '',
                cisnienie: Math.round((this.state.gestosc * this.state.cisnienieJedn.wart * this.state.wysokosc * this.state.wysokoscJedn.wart *
                    9.81) / this.state.cisnienieJedn.wart * 1000) / 1000,
                cisnienieAtm: 0,

                pierwszaLiniaCisnienieAtm: "", drugaLiniaCisnienieAtm: "", trzeciaLiniaCisnienieAtm: '', czwartaLiniaCisnienieAtm: '',
                pierwszaLiniaCisnienie: 'P_h=&ro;*g*h', drugaLiniaCisnienie: "", trzeciaLiniaCisnienie: '', czwartaLiniaCisnienie: '',
                pierwszaLiniaMasa: this.state.silaWyporu !== '' ? 'F_w=&ro;*g*V' : '', drugaLiniaMasa: this.state.silaWyporu !== '' ? "m=&ro;*V" : '',
                trzeciaLiniaMasa: this.state.silaWyporu !== '' ? 'm=F/g' : '', czwartaLiniaMasa: '',
                pierwszaLiniaWysokosc: '', drugaLiniaWysokosc: '', trzeciaLiniaWysokosc: '', czwartaLiniaWysokosc: '',
            });
        }
        else if (this.state.cisnienie !== '' && this.state.gestosc !== '' && this.state.cisnienieAtm !== '') {
            this.setState({
                masa: this.state.silaWyporu !== '' ? Math.round((this.state.silaWyporu * this.state.silaWyporuJedn.wart / 9.81) /
                    this.state.masaJedn.wart * 1000) / 1000 : '',
                wysokosc: Math.round(((this.state.cisnienie * this.state.cisnienieJedn.wart - this.state.cisnienieAtm *
                    this.state.cisnienieAtmJedn.wart) / this.state.gestosc * this.state.gestoscJedn.wart / 9.81) /
                    this.state.wysokoscJedn.wart * 1000) / 1000,

                pierwszaLiniaCisnienieAtm: "", drugaLiniaCisnienieAtm: "", trzeciaLiniaCisnienieAtm: '', czwartaLiniaCisnienieAtm: '',
                pierwszaLiniaCisnienie: '', drugaLiniaCisnienie: "", trzeciaLiniaCisnienie: '', czwartaLiniaCisnienie: '',
                pierwszaLiniaMasa: this.state.silaWyporu !== '' ? 'F_w=&ro;*g*V' : '', drugaLiniaMasa: this.state.silaWyporu !== '' ? "m=&ro;*V" : '',
                trzeciaLiniaMasa: this.state.silaWyporu !== '' ? 'm=F/g' : '', czwartaLiniaMasa: '',
                pierwszaLiniaWysokosc: 'h=(P_h-P_a)/(&ro;*g)', drugaLiniaWysokosc: '', trzeciaLiniaWysokosc: '', czwartaLiniaWysokosc: '',
            });
        }
        else if (this.state.cisnienie !== '' && this.state.gestosc !== '') {
            this.setState({
                masa: this.state.silaWyporu !== '' ? Math.round((this.state.silaWyporu * this.state.silaWyporuJedn.wart / 9.81) /
                    this.state.masaJedn.wart * 1000) / 1000 : '',
                wysokosc: Math.round((this.state.cisnienie * this.state.cisnienieJedn.wart / this.state.gestosc *
                    this.state.gestoscJedn.wart / 9.81) / this.state.wysokoscJedn.wart * 1000) / 1000,

                pierwszaLiniaCisnienieAtm: "", drugaLiniaCisnienieAtm: "", trzeciaLiniaCisnienieAtm: '', czwartaLiniaCisnienieAtm: '',
                pierwszaLiniaCisnienie: '', drugaLiniaCisnienie: "", trzeciaLiniaCisnienie: '', czwartaLiniaCisnienie: '',
                pierwszaLiniaMasa: this.state.silaWyporu !== '' ? 'F_w=&ro;*g*V' : '', drugaLiniaMasa: this.state.silaWyporu !== '' ? "m=&ro;*V" : '',
                trzeciaLiniaMasa: this.state.silaWyporu !== '' ? 'm=F/g' : '', czwartaLiniaMasa: '',
                pierwszaLiniaWysokosc: 'h=P_h/(&ro;*g)', drugaLiniaWysokosc: '', trzeciaLiniaWysokosc: '', czwartaLiniaWysokosc: '',
            });
        }
        else if (this.state.cisnienie !== '' && this.state.wysokosc !== '' && this.state.cisnienieAtm !== '') {
            this.setState({
                masa: this.state.silaWyporu !== '' ? Math.round((this.state.silaWyporu * this.state.silaWyporuJedn.wart / 9.81) /
                    this.state.masaJedn.wart * 1000) / 1000 : '',
                gestosc: Math.round(((this.state.cisnienie * this.state.cisnienieJedn.wart - this.state.cisnienieAtm *
                    this.state.cisnienieAtmJedn.wart) / this.state.wysokosc * this.state.wysokoscJedn.wart / 9.81)
                    / this.state.gestoscJedn.wart * 1000) / 1000,

                pierwszaLiniaCisnienieAtm: "", drugaLiniaCisnienieAtm: "", trzeciaLiniaCisnienieAtm: '', czwartaLiniaCisnienieAtm: '',
                pierwszaLiniaCisnienie: '', drugaLiniaCisnienie: "", trzeciaLiniaCisnienie: '', czwartaLiniaCisnienie: '',
                pierwszaLiniaMasa: this.state.silaWyporu !== '' ? 'F_w=&ro;*g*V' : '', drugaLiniaMasa: this.state.silaWyporu !== '' ? "m=&ro;*V" : '',
                trzeciaLiniaMasa: this.state.silaWyporu !== '' ? 'm=F/g' : '', czwartaLiniaMasa: '',
                pierwszaLiniaWysokosc: '', drugaLiniaWysokosc: '', trzeciaLiniaWysokosc: '', czwartaLiniaWysokosc: '',
            });
        }
        else if (this.state.cisnienie !== '' && this.state.wysokosc !== '') {
            this.setState({
                masa: this.state.silaWyporu !== '' ? Math.round((this.state.silaWyporu * this.state.silaWyporuJedn.wart / 9.81) /
                    this.state.masaJedn.wart * 1000) / 1000 : '',
                gestosc: Math.round((this.state.cisnienie * this.state.cisnienieJedn.wart / this.state.wysokosc *
                    this.state.wysokoscJedn.wart / 9.81) / this.state.gestoscJedn.wart * 1000) / 1000,

                pierwszaLiniaCisnienieAtm: "", drugaLiniaCisnienieAtm: "", trzeciaLiniaCisnienieAtm: '', czwartaLiniaCisnienieAtm: '',
                pierwszaLiniaCisnienie: '', drugaLiniaCisnienie: "", trzeciaLiniaCisnienie: '', czwartaLiniaCisnienie: '',
                pierwszaLiniaMasa: this.state.silaWyporu !== '' ? 'F_w=&ro;*g*V' : '', drugaLiniaMasa: this.state.silaWyporu !== '' ? "m=&ro;*V" : '',
                trzeciaLiniaMasa: this.state.silaWyporu !== '' ? 'm=F/g' : '', czwartaLiniaMasa: '',
                pierwszaLiniaWysokosc: '', drugaLiniaWysokosc: '', trzeciaLiniaWysokosc: '', czwartaLiniaWysokosc: '',
            });
        }
    }


    render() {
        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <div style={{ marginRight: '50px', marginTop: '5px' }}>Ciśnienie</div>
                    <div style={{ marginRight: '50px' }}><TextField type="number" key='1' placeholder="Ciśnienie" step="0.1" value={this.state.cisnienie}
                        className="inputTrygo" onChange={(value) => this.changeCisnienie(value.target.value)} /></div>
                    <Select
                        value={this.state.cisnienieJedn.title}
                        onChange={(value) => this.changeJednCisnienie(value.target.value)}
                    >
                        <MenuItem value='mPa'>mPa</MenuItem>
                        <MenuItem value='Pa'>Pa</MenuItem>
                        <MenuItem value='kPa'>kPa</MenuItem>
                        <MenuItem value='Ba'>Ba</MenuItem>
                    </Select>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <div style={{ marginRight: '50px', marginTop: '5px' }}>Gęstość</div>
                    <div style={{ marginRight: '50px' }}><TextField type="number" placeholder="Gęstość" step="0.1" value={this.state.gestosc}
                        onChange={(value) => this.changeGestosc(value.target.value)} /></div>
                    <Select
                        value={this.state.gestoscJedn.title}
                        onChange={(value) => this.changeJednGestosc(value.target.value)}
                    >
                        <MenuItem value='g/cm3'>g/cm3</MenuItem>
                        <MenuItem value='g/dm3'>g/dm3</MenuItem>
                        <MenuItem value='kg/cm3'>kg/cm3</MenuItem>
                        <MenuItem value='kg/m3'>kg/m3</MenuItem>
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
                    <div style={{ marginRight: '50px', marginTop: '5px' }}>Masa</div>
                    <div style={{ marginRight: '50px' }}><TextField type="number" placeholder="Masa" step="0.1" value={this.state.masa}
                        onChange={(value) => this.changeMasa(value.target.value)} /></div>
                    <Select
                        value={this.state.masaJedn.title}
                        onChange={(value) => this.changeJednMasa(value.target.value)}
                    >
                        <MenuItem value='g'>g</MenuItem>
                        <MenuItem value='kg'>kg</MenuItem>
                        <MenuItem value='t'>t</MenuItem>
                    </Select>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <div style={{ marginRight: '50px', marginTop: '5px' }}>Ciśnienie atmosferyczne</div>
                    <div style={{ marginRight: '50px' }}><TextField type="number" placeholder="Ciśnienie atm." step="0.1" value={this.state.cisnienieAtm}
                        onChange={(value) => this.changeCisnienieAtm(value.target.value)} /></div>
                    <Select
                        value={this.state.cisnienieAtmJedn.title}
                        onChange={(value) => this.changeJednCisnienieAtm(value.target.value)}
                    >
                        <MenuItem value='mPa'>mPa</MenuItem>
                        <MenuItem value='Pa'>Pa</MenuItem>
                        <MenuItem value='kPa'>kPa</MenuItem>
                        <MenuItem value='Ba'>Ba</MenuItem>
                    </Select>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <div style={{ marginRight: '50px', marginTop: '5px' }}>Siła wyporu</div>
                    <div style={{ marginRight: '50px' }}><TextField type="number" placeholder="Siła wyporu" step="0.1" value={this.state.silaWyporu}
                        onChange={(value) => this.changeSilaWyporu(value.target.value)} /></div>
                    <Select
                        value={this.state.silaWyporuJedn.title}
                        onChange={(value) => this.changeJednSilaWyporu(value.target.value)}
                    >
                        <MenuItem value='mN'>mN</MenuItem>
                        <MenuItem value='N'>N</MenuItem>
                        <MenuItem value='kN'>kN</MenuItem>
                    </Select>
                </div>

                <ButtonGroup aria-label="Basic example">
                    <Button variant="primary" onClick={()=>{
                        this.calculateRest1();
                    }}>
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
                        <Typography >Ciśnienie</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>{this.state.pierwszaLiniaCisnienie}</p>
                            <p>{this.state.drugaLiniaCisnienie}</p>
                            <p>{this.state.trzeciaLiniaCisnienie}</p>
                            <p>{this.state.czwartaLiniaCisnienie}</p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreOutlined />}
                        aria-controls="panel1a-content"
                    >
                        <Typography >Siła wyporu</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>{this.state.pierwszaLiniaSila}</p>
                            <p>{this.state.drugaLiniaSila}</p>
                            <p>{this.state.trzeciaLiniaSila}</p>
                            <p>{this.state.czwartaLiniaSila}</p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreOutlined />}
                        aria-controls="panel1a-content"
                    >
                        <Typography >Powierzchnia</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>{this.state.pierwszaLiniaPowierzchnia}</p>
                            <p>{this.state.drugaLiniaPowierzchnia}</p>
                            <p>{this.state.trzeciaLiniaPowierzchnia}</p>
                            <p>{this.state.czwartaLiniaPowierzchnia}</p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreOutlined />}
                        aria-controls="panel1a-content"
                    >
                        <Typography >Masa</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>{this.state.pierwszaLiniaMasa}</p>
                            <p>{this.state.drugaLiniaMasa}</p>
                            <p>{this.state.trzeciaLiniaMasa}</p>
                            <p>{this.state.czwartaLiniaMasa}</p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        );
    }
}
