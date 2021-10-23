import React from 'react';
import { Button, ButtonGroup, MenuItem, Select, Accordion, Card, TextField, Typography, AccordionDetails, AccordionSummary } from '@material-ui/core';
import { ExpandMoreOutlined } from '@material-ui/icons';


export default class Prostokat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bokA: '',
            bokB: '',
            obwod: '',
            pole: '',
            przekatna: '',
            bokJednA: { title: 'cm', wart: 10 },
            bokJednB: { title: 'cm', wart: 10 },
            poleJedn: { title: 'cm2', wart: 100 },
            obwodJedn: { title: 'cm', wart: 10 },
            przekatnaJedn: { title: 'cm', wart: 10 },
            pierwszaLiniaBokA: '',
            drugaLiniaBokA: '',
            pierwszaLiniaBokB: '',
            drugaLiniaBokB: '',
            pierwszaLiniaPole: '',
            drugaLiniaPole: '',
            pierwszaLiniaObwod: '',
            drugaLiniaObwod: '',
            pierwszaLiniaPrzekatna: '',
            drugaLiniaPrzekatna: '',
        }
    }


    changeBokA(number) {
        try {
            if (!number) {
                this.setState({ bokA: number });
            }
            else if (number > -2000 && number < 2000) {

                this.setState({ bokA: number });
            }
            else {
                if (number < 0) {
                    this.setState({ bokA: number.substring(0, number.length - 1) });
                }
                else {
                    this.setState({ bokA: number.substring(0, number.length - 1) });
                }
            }
        }
        catch (e) { }
    }

    changeBokB(number) {
        try {
            if (!number) {
                this.setState({ bokB: number });
            }
            else if (number > -2000 && number < 2000) {

                this.setState({ bokB: number });
            }
            else {
                if (number < 0) {
                    this.setState({ bokB: number.substring(0, number.length - 1) });
                }
                else {
                    this.setState({ bokB: number.substring(0, number.length - 1) });
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
    changePrzekatna = (number) => {
        try {
            if (!number) {
                this.setState({ przekatna: number });
            }
            else if (number > -2000 && number < 2000) {

                this.setState({ przekatna: number });
            }
            else {
                if (number < 0) {
                    this.setState({ przekatna: number.substring(0, number.length - 1) });
                }
                else {
                    this.setState({ przekatna: number.substring(0, number.length - 1) });
                }
            }
        }
        catch (e) { }
    };

    getValueOfJedn = (jedn) => {
        if (jedn === 'mm') {
            return 1;
        }
        else if (jedn === 'cm') {
            return 10;
        }
        else if (jedn === 'dm') {
            return 100;
        }
        else if (jedn === 'm') {
            return 1000;
        }
        else if (jedn === 'mm2') {
            return 1;
        }
        else if (jedn === 'cm2') {
            return 100;
        }
        else if (jedn === 'dm2') {
            return 10000;
        }
        else if (jedn === 'm2') {
            return 1000000;
        }
    }

    changeJednBokA = (newOne) => {
        this.setState({ bokJednA: { title: newOne, wart: this.getValueOfJedn(newOne) } });
    }
    changeJednBokB = (newOne) => {
        this.setState({ bokJednB: { title: newOne, wart: this.getValueOfJedn(newOne) } });
    }
    changeJednPole = (newOne) => {
        this.setState({ poleJedn: { title: newOne, wart: this.getValueOfJedn(newOne) } });
    }
    changeJednObwod = (newOne) => {
        this.setState({ obwodJedn: { title: newOne, wart: this.getValueOfJedn(newOne) } });
    }
    changeJednPrzekatna = (newOne) => {
        this.setState({ przekatnaJedn: { title: newOne, wart: this.getValueOfJedn(newOne) } });
    }

    clearAllFields = () => {
        this.changeBokA('');
        this.changeBokB('');
        this.changeObwod('')
        this.changePole('');
        this.changePrzekatna('');
        this.changeJednBokA('cm', 10);
        this.changeJednBokB('cm', 10);
        this.changeJednObwod('cm', 10);
        this.changeJednPole('cm2', 100);
        this.changeJednPrzekatna('cm', 10);
        this.setState({
            pierwszaLiniaBokA: '',
            drugaLiniaBokA: '',
            pierwszaLiniaBokB: '',
            drugaLiniaBokB: '',
            pierwszaLiniaPole: '',
            drugaLiniaPole: '',
            pierwszaLiniaObwod: '',
            drugaLiniaObwod: '',
            pierwszaLiniaPrzekatna: '',
            drugaLiniaPrzekatna: '',
        });
    }

    calculateRest = () => {

        if (this.state.bokA !== '' && this.state.bokB !== '') {
            this.setState({
                obwod: ((2 * this.state.bokA * this.state.bokJednA.wart) + (2 * this.state.bokB * this.state.bokJednB.wart)) / this.state.obwodJedn.wart,
                pole: this.state.bokA * this.state.bokB * this.state.bokJednA.wart * this.state.bokJednB.wart / this.state.poleJedn.wart,
                przekatna: Math.sqrt((this.state.bokA * this.state.bokA * this.state.bokJednA.wart * this.state.bokJednA.wart) +
                    (this.state.bokB * this.state.bokB * this.state.bokJednB.wart * this.state.bokJednB.wart)) / this.state.przekatnaJedn.wart,
                pierwszaLiniaPole: "P=a*b", drugaLiniaPole: "",
                pierwszaLiniaObwod: 'Ob=2*a+2*b', drugaLiniaObwod: "",
                pierwszaLiniaPrzekatna: 'd=sqrt(a^2+b^2)', drugaLiniaPrzekatna: "",
                pierwszaLiniaBokA: '', drugaLiniaBokA: '', pierwszaLiniaBokB: '', drugaLiniaBokB: ''
            });
        }
        else if (this.state.obwod !== '' && (this.state.bokA !== '' || this.state.bokB !== '')) {

            let bokA = this.state.bokA !== '' ? this.state.bokA : (this.state.obwod * this.state.obwodJedn.wart -
                (2 * this.state.bokB * this.state.bokJednB.wart)) / 2 / this.state.bokJednA.wart;
            let bokB = (this.state.obwod * this.state.obwodJedn.wart - 2 * bokA * this.state.bokJednA.wart) / 2 / this.state.bokJednB.wart;

            this.setState({
                bokA: bokA, bokB: bokB,
                pole: bokA * this.state.bokJednA.wart * bokB * this.state.bokJednB.wart / this.state.poleJedn.wart,
                przekatna: Math.sqrt(bokA * bokA * this.state.bokJednA.wart * this.state.bokJednA.wart + bokB * bokB * this.state.bokJednB.wart *
                    this.state.bokJednB.wart) / this.state.przekatnaJedn.wart,
                pierwszaLiniaPole: "P=a*b", drugaLiniaPole: "",
                pierwszaLiniaObwod: '', drugaLiniaObwod: "",
                pierwszaLiniaPrzekatna: 'd=sqrt(a^2+b^2)', drugaLiniaPrzekatna: "",
                pierwszaLiniaBokA: 'a=(Ob-(2*b))/2', drugaLiniaBokA: '', pierwszaLiniaBokB: 'b=(Ob-(2*a))/2', drugaLiniaBokB: ''
            });
        }
        else if ((this.state.pole !== '') && (this.state.bokA !== '' || this.state.bokB !== '')) {

            let bokA = this.state.bokA !== '' ? this.state.bokA : (this.state.pole * this.state.poleJedn.wart / this.state.bokB /
                this.state.bokJednB.wart) / this.state.bokJednA.wart;

            let bokB = (this.state.pole * this.state.poleJedn.wart / bokA / this.state.bokJednA.wart) / this.state.bokJednB.wart;

            this.setState({
                bokA: bokA, bokB: bokB,
                obwod: ((2 * bokA * this.state.bokJednA.wart) + (2 * bokB * this.state.bokJednB.wart)) / this.state.obwodJedn.wart,
                przekatna: Math.sqrt((bokA * bokA * this.state.bokJednA.wart * this.state.bokJednA.wart) +
                    (bokB * bokB * this.state.bokJednB.wart * this.state.bokJednB.wart)) / this.state.przekatnaJedn.wart,
                pierwszaLiniaObwod: "b=P/a", drugaLiniaObwod: "Ob=2*a+2*b",
                pierwszaLiniaBokA: 'a=P/b', drugaLiniaBokA: "", pierwszaLiniaBokB: 'b=P/a', drugaLiniaBokB: "",
                pierwszaLiniaPrzekatna: 'd=sqrt(a^2+b^2)', drugaLiniaPrzekatna: "",
                pierwszaLiniaPole: '', drugaLiniaPole: '',
            });
        }
        else if (this.state.przekatna !== '' && (this.state.bokA !== '' || this.state.bokB !== '')) {

            let bokA = this.state.bokA !== '' ? this.state.bokA : Math.sqrt(this.state.przekatna * this.state.przekatna *
                this.state.przekatnaJedn.wart * this.state.przekatnaJedn.wart - this.state.bokB * this.state.bokB *
                this.state.bokJednB.wart * this.state.bokJednB.wart) / this.state.bokJednA.wart;

            let bokB = this.state.bokB !== '' ? this.state.bokB : Math.sqrt(this.state.przekatna * this.state.przekatna *
                this.state.przekatnaJedn.wart * this.state.przekatnaJedn.wart - bokA * bokA *
                this.state.bokJednA.wart * this.state.bokJednA.wart) / this.state.bokJednB.wart;

            this.setState({
                bokA: bokA, bokB: bokB,
                obwod: (2 * bokA * this.state.bokJednA.wart + 2 * bokB * this.state.bokJednB.wart) / this.state.obwodJedn.wart,
                pole: bokA * bokB * this.state.bokJednA.wart * this.state.bokJednB.wart / this.state.poleJedn.wart,
                pierwszaLiniaPole: "P=a*b", drugaLiniaPole: "",
                pierwszaLiniaBokA: 'a=sqrt(d^2-b^2)', drugaLiniaBokA: "",
                pierwszaLiniaBokB: 'b=sqrt(d^2-a^2)', drugaLiniaBokB: "",
                pierwszaLiniaObwod: 'Ob=a+b', drugaLiniaObwod: "",
                pierwszaLiniaPrzekatna: '', drugaLiniaPrzekatna: '',
            });
        }
    }


    render() {
        return (
            <div>


                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <div style={{ marginRight: '50px', marginTop: '5px' }}>Krótszy bok</div>
                    <div style={{ marginRight: '50px' }}><TextField type="number" key='1' placeholder="Krótszy bok" step="0.1" value={this.state.bokA}
                        className="inputTrygo" onChange={(value) => this.changeBokA(value.target.value)} /></div>
                    <Select
                        value={this.state.bokJednA.title}
                        onChange={(value) => this.changeJednBokA(value.target.value)}
                    >
                        <MenuItem value='mm'>mm</MenuItem>
                        <MenuItem value='cm'>cm</MenuItem>
                        <MenuItem value='dm'>dm</MenuItem>
                        <MenuItem value='m'>m</MenuItem>
                    </Select>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <div style={{ marginRight: '50px', marginTop: '5px' }}>Dłuższy bok</div>
                    <div style={{ marginRight: '50px' }}><TextField type="number" key='2' placeholder="Dłuższy bok" step="0.1" value={this.state.bokB}
                        className="inputTrygo" onChange={(value) => this.changeBokB(value.target.value)} /></div>
                    <Select
                        value={this.state.bokJednB.title}
                        onChange={(value) => this.changeJednBokB(value.target.value)}
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
                    <div style={{ marginRight: '50px', marginTop: '5px' }}>Przekątna</div>
                    <div style={{ marginRight: '50px' }}><TextField type="number" placeholder="Przekątna" step="0.1" value={this.state.przekatna}
                        onChange={(value) => this.changePrzekatna(value.target.value)} /></div>
                    <Select
                        value={this.state.przekatnaJedn.title}
                        onChange={(value) => this.changeJednPrzekatna(value.target.value)}
                    >
                        <MenuItem value='mm'>mm</MenuItem>
                        <MenuItem value='cm'>cm</MenuItem>
                        <MenuItem value='dm'>dm</MenuItem>
                        <MenuItem value='m'>m</MenuItem>
                    </Select>
                </div>

                <ButtonGroup aria-label="Basic example">
                    <Button variant="primary" onClick={() => this.calculateRest()}>
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
                        <Typography >Krótszy bok</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>{this.state.pierwszaLiniaBokA}</p>
                            <p>{this.state.drugaLiniaBokA}</p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreOutlined />}
                        aria-controls="panel1a-content"
                    >
                        <Typography >Dłuższy bok</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>{this.state.pierwszaLiniaBokB}</p>
                            <p>{this.state.drugaLiniaBokB}</p>
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
                            <p>{this.state.pierwszaLiniaObwod}</p>
                            <p>{this.state.drugaLiniaObwod}</p>
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
                        <Typography >Przekątna</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>{this.state.pierwszaLiniaPrzekatna}</p>
                            <p>{this.state.drugaLiniaPrzekatna}</p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        );
    }
}