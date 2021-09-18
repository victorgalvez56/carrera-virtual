
import React, { useState, useEffect } from 'react'
import HomeBanner from '../components/HomeBanner'
import ListTips from '../components/ListTips'
import Backbutton from '../components/elements/Backbutton'
import { Plugins } from '@capacitor/core';
import { CameraPreviewOptions, CameraPreviewPictureOptions } from '@capacitor-community/camera-preview'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CameraSwitch from '@material-ui/icons/CameraSwitch';


const { CameraPreview } = Plugins;


function Selfie() {

    const [loading, setLoading] = useState(true);
    const [cameraActive, setCameraActive] = useState(false);
    const [torchActive, setSetTorchActive] = useState(true);


    function openCamara() {
        const CameraPreviewOptions = {
            position: 'rear',
            parent: 'cameraPreview',
            className: 'cameraPreview',
            toBack: true
        }
        CameraPreview.start(CameraPreviewOptions);
        setCameraActive(true);
    }
    useEffect(() => {
    }, [])

    return (
        <div>
            <button onClick={openCamara}>ABRIR CÁMARA</button>

            <div class="container-selfie">

                <div id="cameraPreview" class="cameraPreview">
                    {cameraActive &&
                        <div>
                            <img src="https://img2.freepng.es/20180803/roe/kisspng-react-native-native-apps-parallel-f%C3%BCr-android-un-github-reactbangalore-projects-running-projects-5b63da99b753f4.7501926515332706817509.jpg" alt="Girl in a jacket" class="image-overlay" />
                            <IconButton aria-label="delete" id="close">
                            </IconButton>

                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera />
                            </IconButton>
                            <IconButton color="secondary" aria-label="add an alarm" id="flip">
                                <CameraSwitch  />
                            </IconButton>

                        </div>
                    }
                </div>
            </div>

            {/* <ion-header >

                <ion-toolbar>
                    <ion-buttons slot="start" >
                        <ion-button>
                            <ion-icon slot="icon-only" name="close-outline"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                    <ion-title></ion-title>
                </ion-toolbar>
            </ion-header >
            <ion-content>
                <div id="cameraPreview" class="cameraPreview">
                    {cameraActive &&
                        <div>
                            <ion-button color="light" expand="block" id="close">
                                <DeleteIcon fontSize="large" />
                            </ion-button>
                            <ion-button color="light" expand="block" id="capture">
                                <ion-icon name="camera" slot="icon-only"></ion-icon>
                            </ion-button>
                            <ion-button color="light" expand="block" id="flip">
                                <ion-icon name="camera-reverse" slot="icon-only"></ion-icon>
                            </ion-button>
                            <ion-button color="light" expand="block" id="flash" >
                            </ion-button >
                        </div >
                    }
                </div >
            </ion-content > */}
        </div >

    )
}

export default Selfie;

