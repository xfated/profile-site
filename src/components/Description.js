import React from 'react';
import { MyInfo } from '../profile/myinfo'
import { saveAs }  from 'file-saver';
import { Button } from 'reactstrap';
import './Description.css';

const Description = (props) => {

    const saveFile = () => {
        saveAs(
            `${process.env.PUBLIC_URL}/${MyInfo.resume}`, `${(MyInfo.firstname).replaceAll(/\s/g,'')}${(MyInfo.lastname).replaceAll(/\s/g,'')}_Resume.pdf`
        );
    }

    const profile_desc = MyInfo.profile_info.split('\n').map((line,i) => {
        return (
            <span key={line+i}>{line}<br /></span>
        )
    });

    const titles = MyInfo.titles.split('\n').map((line,i) => {
        return (
            <span key={line+i}><strong>{line}</strong><br /></span>
        )
    });


    return(
        <div>
            <div className="profile-container flex">
                <div className="col-12 text-center section-header">
                    <br/>
                    <h1 className="mb-0">About Myself</h1>
                    <small>A small introduction</small>
                    <br/>
                </div>
                <div className="col-12 col-md-6 flex flex-horizontal-center">
                    <div className="profile-pic-frame">
                        <img className="profile-pic" src={`${process.env.PUBLIC_URL}/${MyInfo.displaypic}`} alt='profile picture'/>
                    </div>
                </div>    
                <div className="col-12 col-md-6">
                    <div className="col-12 profile-info">
                        <div className="block text-justify">
                            <br />
                            <h6>{titles}</h6>
                            <br />
                            {profile_desc}
                            <br /> <br /> 
                            <blockquote className="blockquote text-center">
                                <i className="fa fa-quote-left fa-pull-left"></i>
                                <p className="mb-0">
                                    {MyInfo.quote}
                                </p>
                                <i className="fa fa-quote-right fa-pull-right"></i>
                                <footer className="blockquote-footer">
                                    <cite title="Source Title">{MyInfo.quote_source}</cite>
                                </footer>
                            </blockquote>
                            <br /> <br />
                        </div>
                    </div>
                    <div className="text-center">
                        <Button className="resume-download" onClick={saveFile}>Resume</Button>
                    </div>
                    <div className="col-12 profile-social">
                        <a className="btn btn-social-icon btn-linkedin" href={MyInfo.linkedin}> <i className="fa fa-linkedin"></i> </a>
                        <a className="btn btn-social-icon btn-github" href={MyInfo.github}> <i className="fa fa-github"></i> </a>
                    </div>
                </div>               
            </div>
            <div className="col-12 text-right update-time">
                <span><i>Last Updated On: {MyInfo.update_time}</i></span>
            </div>
        </div>
    );
}

export default Description;