import React from 'react';
import { Button, ButtonGroup, MenuItem, Select, Accordion, Card, TextField, Typography, AccordionDetails, AccordionSummary } from '@material-ui/core';
import { ExpandMoreOutlined } from '@material-ui/icons';

class Kwadrat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bok: '',
            obwod: '',
            pole: '',
            przekatna: '',
            bokJedn: { title: 'cm', wart: 10 },
            poleJedn: { title: 'cm2', wart: 100 },
            obwodJedn: { title: 'cm', wart: 10 },
            przekatnaJedn: { title: 'cm', wart: 10 },
            pierwszaLiniaBok: '',
            drugaLiniaBok: '',
            pierwszaLiniaPole: '',
            drugaLiniaPole: '',
            pierwszaLiniaObwod: '',
            drugaLiniaObwod: '',
            pierwszaLiniaPrzekatna: '',
            drugaLiniaPrzekatna: '',
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

    changeJednBok = (newOne) => {
        this.setState({ bokJedn: { title: newOne, wart: this.getValueOfJedn(newOne) } });
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
        this.changeBok('');
        this.changeObwod('')
        this.changePole('');
        this.changePrzekatna('');
        this.changeJednBok('cm', 10)
        this.changeJednObwod('cm', 10)
        this.changeJednPole('cm2', 100)
        this.changeJednPrzekatna('cm', 10)
        this.setState({
            pierwszaLiniaBok: '',
            drugaLiniaBok: '',
            pierwszaLiniaPole: '',
            drugaLiniaPole: '',
            pierwszaLiniaObwod: '',
            drugaLiniaObwod: '',
            pierwszaLiniaPrzekatna: '',
            drugaLiniaPrzekatna: '',
        });
    }

    calculateRest = () => {

        if (this.state.bok !== '') {
            this.setState({
                obwod: 4 * this.state.bok * this.state.bokJedn.wart / this.state.obwodJedn.wart,
                pole: this.state.bok * this.state.bok * this.state.bokJedn.wart * this.state.bokJedn.wart / this.state.poleJedn.wart,
                przekatna: this.state.bok * Math.SQRT2 * this.state.bokJedn.wart / this.state.przekatnaJedn.wart,
                pierwszaLiniaPole: "P=a<sup><small><small>2</small></small></sup>", drugaLiniaPole: "",
                pierwszaLiniaObwod: 'Ob=4*a', drugaLiniaObwod: "",
                pierwszaLiniaPrzekatna: 'd=a*sqrt(2)', drugaLiniaPrzekatna: "",
                pierwszaLiniaBok: '', drugaLiniaBok: '',
            });
        }
        else if (this.state.obwod !== '') {
            this.setState({
                bok: this.state.obwod / 4 * this.state.obwodJedn.wart / this.state.bokJedn.wart,
                pole: this.state.obwod * this.state.obwodJedn.wart / 4 * this.state.obwod / 4 * this.state.obwodJedn.wart / this.state.poleJedn.wart,
                przekatna: this.state.obwod / 4 * Math.SQRT2 * this.state.obwodJedn.wart / this.state.przekatnaJedn.wart,
                pierwszaLiniaPole: "a=Ob/4", drugaLiniaPole: "P=a<sup><small><small>2</small></small></sup>",
                pierwszaLiniaBok: 'a=Ob/4', drugaLiniaBok: "",
                pierwszaLiniaPrzekatna: 'a=Ob/4', drugaLiniaPrzekatna: "d=a*sqrt(2)",
                pierwszaLiniaObwod: '', drugaLiniaObwod: '',
            });
        }
        else if (this.state.pole !== '') {
            this.setState({
                bok: Math.sqrt(this.state.pole) * this.state.poleJedn.wart / this.state.bokJedn.wart / this.state.bokJedn.wart,
                obwod: 4 * Math.sqrt(this.state.pole) * this.state.poleJedn.wart / this.state.obwodJedn.wart / this.state.obwodJedn.wart,
                przekatna: Math.sqrt(this.state.pole) * Math.SQRT2 * this.state.poleJedn.wart / this.state.przekatnaJedn.wart / this.state.przekatnaJedn.wart,
                pierwszaLiniaObwod: "a=sqrt(P)", drugaLiniaObwod: "Ob=4*a",
                pierwszaLiniaBok: 'a=sqrt(P)', drugaLiniaBok: "",
                pierwszaLiniaPrzekatna: 'a=sqrt(P)', drugaLiniaPrzekatna: "d=a*sqrt(2)",
                pierwszaLiniaPole: '', drugaLiniaPole: '',
            });
        }
        else if (this.state.przekatna !== '') {
            this.setState({
                bok: this.state.przekatna / Math.SQRT2 * this.state.przekatnaJedn.wart / this.state.poleJedn.wart,
                obwod: 4 * this.state.przekatna / Math.SQRT2 * this.state.przekatnaJedn.wart / this.state.obwodJedn.wart,
                pole: this.state.przekatna * this.state.przekatna / 2 * this.state.przekatnaJedn.wart * this.state.przekatnaJedn.wart / this.state.poleJedn.wart,
                pierwszaLiniaPole: "a=d/sqrt(2)", drugaLiniaPole: "P=a<sup><small><small>2</small></small></sup>",
                pierwszaLiniaBok: 'a=d/sqrt(2)', drugaLiniaBok: "",
                pierwszaLiniaObwod: 'a=d/sqrt(2)', drugaLiniaObwod: "Ob=4*a",
                pierwszaLiniaPrzekatna: '', drugaLiniaPrzekatna: '',
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
                    <Button variant="primary" type="submit" onClick={() => {
                        this.calculateRest();
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

export default Kwadrat;