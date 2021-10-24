import React from 'react';
import { Button, ButtonGroup, MenuItem, Select, Accordion, Card, TextField, Typography, AccordionDetails, AccordionSummary } from '@material-ui/core';
import { ExpandMoreOutlined } from '@material-ui/icons';

export default class Rownoleglobok extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bokA: '',
            bokB: '',
            obwod: '',
            pole: '',
            przekatnaA: '',
            przekatnaB: '',
            wysokoscA: '',
            wysokoscB: '',
            katA: '',
            katB: '',
            katC: '',
            bokJednA: { title: 'cm', wart: 10 },
            bokJednB: { title: 'cm', wart: 10 },
            poleJedn: { title: 'cm2', wart: 100 },
            obwodJedn: { title: 'cm', wart: 10 },
            przekatnaJednA: { title: 'cm', wart: 10 },
            przekatnaJednB: { title: 'cm', wart: 10 },
            wysokoscJednA: { title: 'cm', wart: 10 },
            wysokoscJednB: { title: 'cm', wart: 10 },
            pierwszaLiniaBokA: '',
            drugaLiniaBokA: '',
            pierwszaLiniaBokB: '',
            drugaLiniaBokB: '',
            pierwszaLiniaPole: '',
            drugaLiniaPole: '',
            pierwszaLiniaObwod: '',
            drugaLiniaObwod: '',
            pierwszaLiniaPrzekatnaA: '',
            drugaLiniaPrzekatnaA: '',
            pierwszaLiniaPrzekatnaB: '',
            drugaLiniaPrzekatnaB: '',
            pierwszaLiniaWysokoscA: '',
            drugaLiniaWysokoscA: '',
            pierwszaLiniaWysokoscB: '',
            drugaLiniaWysokoscB: '',
            pierwszaLiniaKatA: '',
            pierwszaLiniaKatB: '',
            pierwszaLiniaKatC: '',
        }
    }


    changeBokA(number) {
        try {
            this.setState({ bokA: number });
        }
        catch (e) { }
    }
    changeBokB(number) {
        try {
            this.setState({ bokB: number });
        }
        catch (e) { }
    }
    changeObwod(number) {
        try {
            this.setState({ obwod: number });
        }
        catch (e) { }
    }
    changePole(number) {
        try {
            this.setState({ pole: number });
        }
        catch (e) { }
    }
    changeWysokoscA(number) {
        try {
            this.setState({ wysokoscA: number });
        }
        catch (e) { }
    }
    changeWysokoscB(number) {
        try {
            this.setState({ wysokoscB: number });
        }
        catch (e) { }
    }
    changePrzekatnaA(number) {
        try {
            this.setState({ przekatnaA: number });
        }
        catch (e) { }
    }
    changePrzekatnaB(number) {
        try {
            this.setState({ przekatnaB: number });
        }
        catch (e) { }
    }
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
    changeKatC = (number) => {
        try {
            if (!number) {
                this.setState({ katC: number });
            }
            else if (number > -2000 && number < 2000) {

                this.setState({ katC: number });
            }
            else {
                if (number < 0) {
                    this.setState({ katC: number.substring(0, number.length - 1) });
                }
                else {
                    this.setState({ katC: number.substring(0, number.length - 1) });
                }
            }
        }
        catch (e) { }
    };

    changeJednBokA = (newOne, wart) => {
        this.setState({ bokJednA: { title: newOne, wart: wart } });
    }
    changeJednBokB = (newOne, wart) => {
        this.setState({ bokJednB: { title: newOne, wart: wart } });
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
    changeJednWysokoscA = (newOne, wart) => {
        this.setState({ wysokoscJednA: { title: newOne, wart: wart } });
    }
    changeJednWysokoscB = (newOne, wart) => {
        this.setState({ wysokoscJednB: { title: newOne, wart: wart } });
    }


    clearAllFields = () => {
        this.changeBokA('');
        this.changeBokB('');
        this.changeObwod('')
        this.changePole('');
        this.changePrzekatnaA('');
        this.changePrzekatnaB('');
        this.changeWysokoscA('');
        this.changeWysokoscB('');
        this.changeKatA('');
        this.changeKatB('');
        this.changeKatC('');
        this.changeJednBokA('cm', 10);
        this.changeJednBokB('cm', 10);
        this.changeJednObwod('cm', 10);
        this.changeJednPole('cm2', 100);
        this.changeJednPrzekatnaA('cm', 10);
        this.changeJednPrzekatnaB('cm', 10);
        this.changeJednWysokoscA('cm', 10);
        this.changeJednWysokoscB('cm', 10);
        this.setState({
            pierwszaLiniaBokA: '',
            drugaLiniaBokA: '',
            pierwszaLiniaBokB: '',
            drugaLiniaBokB: '',
            pierwszaLiniaPole: '',
            drugaLiniaPole: '',
            pierwszaLiniaObwod: '',
            drugaLiniaObwod: '',
            pierwszaLiniaPrzekatnaA: '',
            drugaLiniaPrzekatnaA: '',
            pierwszaLiniaPrzekatnaB: '',
            drugaLiniaPrzekatnaB: '',
            pierwszaLiniaWysokoscA: '',
            drugaLiniaWysokoscA: '',
            pierwszaLiniaWysokoscB: '',
            drugaLiniaWysokoscB: '',
            pierwszaLiniaKatA: '',
            pierwszaLiniaKatB: '',
            pierwszaLiniaKatC: '',
        });
    }

    calculateRest = () => {
        
    }

    render() {
        return (
            <div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <div style={{ marginRight: '50px', marginTop: '5px' }}>Krótszy bok</div>
                    <div style={{ marginRight: '50px' }}><TextField type="number" key='1' placeholder="Bok" step="0.1" value={this.state.bokA}
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
                    <div style={{ marginRight: '50px', marginTop: '5px' }}>Krótsza wysokość</div>
                    <div style={{ marginRight: '50px' }}><TextField type="number" placeholder="Krótsza wysokość" step="0.1" value={this.state.wysokoscA}
                        onChange={(value) => this.changeWysokoscA(value.target.value)} /></div>
                    <Select
                        value={this.state.wysokoscJednA.title}
                        onChange={(value) => this.changeJednWysokoscA(value.target.value)}
                    >
                        <MenuItem value='mm'>mm</MenuItem>
                        <MenuItem value='cm'>cm</MenuItem>
                        <MenuItem value='dm'>dm</MenuItem>
                        <MenuItem value='m'>m</MenuItem>
                    </Select>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <div style={{ marginRight: '50px', marginTop: '5px' }}>Dłuższa wysokość</div>
                    <div style={{ marginRight: '50px' }}><TextField type="number" placeholder="Dłuższa wysokość" step="0.1" value={this.state.wysokoscB}
                        onChange={(value) => this.changeWysokoscB(value.target.value)} /></div>
                    <Select
                        value={this.state.wysokoscJednB.title}
                        onChange={(value) => this.changeJednWysokoscB(value.target.value)}
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
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <div style={{ marginRight: '50px', marginTop: '5px' }}>Kąt między przekątnymi</div>
                    <div style={{ marginRight: '50px' }}><TextField type="number" placeholder="Kąt między przekątnymi" step="0.1" value={this.state.katC}
                        onChange={(value) => this.changeKatC(value.target.value)} /></div>
                </div>

                <ButtonGroup aria-label="Basic example">
                    <Button variant="primary" onClick={()=>{
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
                        <Typography >Krótsza wysokość</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>{this.state.pierwszaLiniaWysokoscA}</p>
                            <p>{this.state.drugaLiniaWysokoscA}</p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreOutlined />}
                        aria-controls="panel1a-content"
                    >
                        <Typography >Dłuższa wysokość</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>{this.state.pierwszaLiniaWysokoscB}</p>
                            <p>{this.state.drugaLiniaWysokoscB}</p>
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
                        <Typography >Dłuższa przekątna</Typography>
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