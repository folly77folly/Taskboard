import React , {useState, useEffect} from 'react';
import { Topography } from '../atoms/text';
import {Wrapper, MenuStyle, LogoStyle, ProfileStyle, TaskBoxWrapper, TasksWrapperInner,TasksWrapper } from './style';
import ImageLogo from '../../logo.svg'
import axios from 'axios';
import { RoundButton } from '../atoms/style';
import { FaPlusCircle } from 'react-icons/fa'
// import { FaBeer } from 'react-icons/fa';



function TaskBoard() {

    const[image, setImage] = useState();

    const randImage = ()=>{
        const URL = "https://picsum.photos/id/77/info";
        axios.get(URL).then((response)=>{
            console.log(response.data)
        }).catch((error)=>{
            console.log(error.message)
        })
        
    }
    useEffect(()=>{
        let fig = Math.floor(Math.random() * 1001);
        console.log(fig);
        const URL = `https://picsum.photos/id/${fig}/info`;
        axios.get(URL).then((response)=>{
            setImage(response.data.download_url)
        }).catch((error)=>{
            console.log(error.message)
        })


    },[])
    return (
        <>
        <Wrapper>
            <MenuStyle>
                <Logo />
                {image ? 
                    <ProfileImage
                    Source = {image}
                    />
            :<div>
            <Topography
            Title = {'Loading Profile image...'}
            size ={"1rem"}
            >
            </Topography>   
            </div>}

            </MenuStyle>
        </Wrapper>
        <TaskBox />
        </>
    )
}

export default TaskBoard


const Logo = ()=>{
    return(
        <LogoStyle>
            <img src={ImageLogo} alt=""/>
            <Topography
            Title = {'TasksBoard'}
            size ={"2rem"}
            >
            </Topography>
        </LogoStyle>
    )
}

const ProfileImage = (props)=>{
    return(
        <ProfileStyle>
            <img src={props.Source} alt=""/>
        </ProfileStyle>
    )
}


const TaskBox = ()=>{
    return (
        <TasksWrapper>
        <TasksWrapperInner>
        <TaskBoxWrapper>
            <div>
                <Topography
                Primary
                Title = {'My Tasks'}
                size ={"1rem"}
                >
                </Topography>
            </div>
            <div>
                <RoundButton
                height ={'50px'}
                width ={'50px'}
                >
                    <FaPlusCircle />
                </RoundButton>
            </div>
        </TaskBoxWrapper>
        </TasksWrapperInner>
        </TasksWrapper>

    )
}