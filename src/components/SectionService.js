import React from 'react';
import "./SectionService.css";
import { FaEnvira, FaCodepen, FaBusAlt, FaDrawPolygon } from "react-icons/fa";
import logo from "../Images/logo.png";
import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      width: '10%',
      height: '10%',
    },
  });

class SectionService extends React.Component {
    render() {
        return  (
            <div>
                <div>
                    <img src={logo} style={styles.container} resizeMode="cover" alt="souvenir" />
                </div>
                <div className="WrappTotal">
                    <div className="Wrapp">
                        <FaEnvira className="FaEnviraCss" />
                        <p className="FaTextTitle"> Safety First </p>
                        <p className="FaText"> Experienced staff and professionally trained chauffeurs </p>
                    </div>
                    <div className="Wrapp">
                        <FaCodepen className="FaEnviraCss" />
                        <p className="FaTextTitle"> Reasonable Rates </p>
                        <p className="FaText"> We can offer you the right vehicle at the right price to fit your budget </p>
                    </div>
                    <div className="Wrapp">
                        <FaBusAlt className="FaEnviraCss" />
                        <p className="FaTextTitle"> Largest Fleet </p>
                        <p className="FaText"> We offer an extensive fleet of vehicles including sedans, limousines and coach buses </p>
                    </div>
                    <div className="Wrapp">
                        <FaDrawPolygon className="FaEnviraCss" />
                        <p className="FaTextTitle"> Nationwide Service </p>
                        <p className="FaText"> We provide our transportation services nationwide </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default SectionService;
   
/*
<div className="container mx-auto lg:grid lg:grid-cols-8 gap-6 py-24 px-12 items-center place-content-center justify-center">
    <div className="Wrapp">
        <FaEnvira className="FaEnviraCss" />
        <p className="FaTextTitle">Safety First</p>
        <p className="FaText">
        Experienced staff and professionally trained chauffeurs
        </p>
    </div>
    <div className="Wrapp">
        <FaCodepen className="FaEnviraCss" />
        <p className="FaTextTitle">Reasonable Rates</p>
        <p className="FaText">
        We can offer you the right vehicle at the right price to fit your
        budget
        </p>
    </div>
    <div className="Wrapp">
        <FaBusAlt className="FaEnviraCss" />
        <p className="FaTextTitle">Largest Fleet</p>
        <p className="FaText">
        We offer an extensive fleet of vehicles including sedans, limousines
        and coach buses
        </p>
    </div>
    <div className="Wrapp">
        <FaDrawPolygon className="FaEnviraCss" />
        <p className="FaTextTitle">Nationwide Service</p>
        <p className="FaText">
        We provide our transportation services nationwide
        </p>
    </div>
    </div>
*/