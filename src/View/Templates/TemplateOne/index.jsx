
import './index.css';
import React from 'react';
import { connect } from "react-redux";

function TemplateTwo(props) {
    const {theam} = props
    return (
        <div className='main_cv_section'>
                <div className='cv_container'>
                    <div className='cv_header'>
                        <div className='cv_header_top'>
                            <div className='user_into'>
                                <h1 className='user_name'>
                                    {props?.profileData?.data?.fname}  {props?.profileData?.data?.lname}
                                </h1>
                                <div>
                                    <h3 style={{display : 'flex',color:"#a9aaad"}}>{props.profileData?.data?.designation}</h3>
                                </div>
                            </div>
                        </div>
                        <div className={`user_contact_details bg-${theam}`}>
                            <div className='contact_details_one'>
                                <span>Email : {props?.profileData?.data?.email} </span>
                                <span>Phone : {props?.profileData?.data?.phone} </span>
                            </div>
                            <div className='contact_details_two'>
                                <span>Location : {props?.profileData?.data?.location} </span>
                                <span>Linkedin Profile : <a target="_blank" className='url_link' href={props?.profileData?.data?.linkedinProfileLink}>{props?.profileData?.data?.linkedinProfileLink}</a> </span>
                            </div>
                        </div>
                    </div>
                    <div className='cv_body'>
                        <div className='cv_left_section'>
                            <div className='work_experience_section'>
                                <h2 className={theam}>WORK EXPERIENCE</h2>
                                {props?.workExperienceFormData?.data?.map(item => {
                                    return (
                                        <div>
                                            <h3>Company Name : {item.companyName} </h3>
                                            <p>Designation : {item.designation}</p>
                                            <p>Work Duration : {item.workDuration} </p>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='work_experience_section'>
                                <h2 className={theam}>EDUCATION</h2>
                                {props?.educationFormData?.data?.map(info => {
                                    return (
                                        <div>
                                            <p className='collage_name'>Clg Name : {info.college} </p>
                                            <p>Graduation Year : {info.completionYear} </p>
                                            <p>Course Name : {info.courseName}</p>
                                            <p>Percentage : {info.percentage}% </p>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                        <div className='cv_right_section'>
                            <div className='skill_section'>
                                <h2 className={`skill_title ${theam}`}>SKILLS</h2>
                                <div className='skills'>
                                    {props?.SkillsFormData?.data?.map(skill => <span className={`skill bg-${theam}`} key={skill}>{skill}</span>)}
                                </div>
                            </div>
                            <div className='projects_section'>
                                <h2 className={theam}>PROJECTS</h2>
                                {props?.projectFormData?.data?.map(proj => {
                                    return (
                                        <div key={proj?.projectName} className='each_project_details'>
                                            <p className='project_name'>Project Name :  {proj.projectName} ({proj.projectDuration})</p>
                                            <p>project Info : {proj.description}</p>
                                            <p>Tech Stack : {proj?.techStack}</p>
                                            <p>Team Size : {proj?.teamSize}</p>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

    educationFormData: state.Education,
    profileData: state.Profile,
    projectFormData: state.Project,
    SkillsFormData: state.Skills,
    workExperienceFormData : state.WorkExperience

});
export default connect(mapStateToProps, {})(TemplateTwo);
