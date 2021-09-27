---
title: COVID Dashboards  
type: portfolio
category: design-research
client: RPI Data Incites
media: Design Thinking | Design Research | UI/UX Design 
dateStart: May 2020 
dateEnd: August 2020
description: Worked with a team of students and developers to create a series of web applications to be used by Rensselaer Polytechnic Institute following the COVID-19 outbreak. I served as the 'design consultant' and oversaw/helped to implement all UI design for web applications. I also created a series of templates to be used by students in future projects.  
image: covid-thumbnail.png
tags: Design Research, Prototyping, UXpin
languages: CSS, R Shiny 
featuredImage: /Covid/covid.png
cModules: {
    moduleOne: { 
        item: buttonBoxes, 
        header: "Application Links",
        inner: {
            contents: 
                {
                    objectOne: {
                        class: minder, 
                        id: school_icon,
                        text: Minder,
                        link: "window.open(https://inciteprojects.idea.rpi.edu/apps/covidminder/?_inputs_&state_name=%22Vermont%22&tab=%22national_report_card%22&_values_&adamodal=true,'_blank','resizable=yes')"
                    },
                     objectTwo: {
                        class: warroom, 
                        id: school_icon,
                        text: War Room,
                        link: "window.open(https://inciteprojects.idea.rpi.edu/apps/warroom/,'_blank','resizable=yes')"
                    },
                     objectThree: {
                        class: back-to-school, 
                        id: school_icon,
                        text: Back-to-School,
                        link: "window.open(https://inciteprojects.idea.rpi.edu/apps/backtoschool/,'_blank', 'resizable=yes')"
                    }
                   
                }
         }
    },
    moduleTwo: { 
        item: pdf-grid, 
        header: "Working Files:",
         inner: {
             contents: {
                objectOne: {
                            col: colTwo, 
                            row: 1, 
                            images: {
                                doc1: "/Covid/Proposal.pdf",
                                doc2: "/Covid/CM_Feedback_05-13-2020.pdf"
                                }                    
                            }
             }
        }
    },
    moduleThree: { 
            item: image, 
            header: "Stylesheet",
            inner: {
                imageOne: {
                     src: "/Covid/COVIDMINDER-BRAND-GUIDELINES.jpg"
                }
            }
        }  
    
}

---