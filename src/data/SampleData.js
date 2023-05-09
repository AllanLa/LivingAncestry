import allan from '../components/imgs/AllanProfile.jpg';
import allan1 from '../components/imgs/Allan1Profile.jpg';
import sam from '../components/imgs/SamProfile.jpg';
import teresa from '../components/imgs/TeresaProfile.jpg';
import anita from '../components/imgs/AnitaProfile.jpg';
import dad from '../components/imgs/DadProfile.JPG';


const SHAPE_SQUARE = {
    shape: 'image',
    shapeProps: {
        src: 'test',
        width: 100,
        height: 100,
        x: -50,
        y: -50,
    }
};

export const SAMPLE_DATA = [
    {
        id: 0,
        name: "Dave La",
        picture: dad,
        profile: 'davela',
        subtitle: "Birthday: December 24, 1994",
        description: "Fun Fact: I have two sets of twins.",
        nodeSvgShape: {
            shape: 'image',
            shapeProps: {
                href: dad,
                r: 50,
                width: 100,
                height: 100,
                x: -50,
                y: -50,
            },
        },
        children: [
            {
                id: 1,
                name: "Sam La",
                picture: sam,
                profile: 'samla',
                subtitle: "Birthday: July 22, 1994",
                description: "Fun Fact: I'm twins with Teresa.",
                nodeSvgShape: {
                    shape: 'image',
                    shapeProps: {
                        href: sam,
                        width: 100,
                        height: 100,
                        x: -50,
                        y: -50,
                    },
                },
            },
            {
                id: 2,
                name: "Teresa La",
                picture: teresa,
                profile: 'teresala',
                subtitle: "Birthday: July 22, 1994",
                description: "Fun Fact: I'm twins with Sam.",
                nodeSvgShape: {
                    shape: 'image',
                    shapeProps: {
                        href: teresa,
                        width: 100,
                        height: 100,
                        x: -50,
                        y: -50,
                    },
                },
            },
            {
                id: 3,
                name: "Allan La",
                picture: allan,
                profile: 'allanla',
                subtitle: "Birthday: July 17, 1995",
                description: "Fun Fact: I hope that Living Ancestry will help others pass down their wisdom and knowledge to the future. Please sign up for the beta release on the home page to support Living Ancestry!",
                children: [
                    {
                        id: 5,
                        name: "Allan La Junior",
                        picture: allan1,
                        profile: 'allanla1',
                        subtitle: "Birthday: July 17, 2029",
                        description: "Fun Fact: My children will be able to access my dad's profile and learn all about him from his time capsule. He can learn about my Dad and understand who he was. Allan La Junior's children will be able to access all these time capsules too as they will be added to the tree eventually and so forth.",
                        nodeSvgShape: {
                            shape: 'image',
                            shapeProps: {
                                href: allan1,
                                width: 100,
                                height: 100,
                                x: -50,
                                y: -50,
                            },
                        },
                    }
                ],
                nodeSvgShape: {
                    shape: 'image',
                    shapeProps: {
                        href: allan,
                        width: 100,
                        height: 100,
                        x: -50,
                        y: -50,
                    },
                },
            },
            {
                id: 4,
                name: "Anita La",
                picture: anita,
                profile: 'anitala',
                subtitle: "Birthday: July 17, 1995",
                description: "Fun Fact: I'm twins with Allan.",
                nodeSvgShape: {
                    shape: 'image',
                    shapeProps: {
                        href: anita,
                        width: 100,
                        height: 100,
                        x: -50,
                        y: -50
                    },
                },
            },
        ]           
    }
];

export const FAMILY_TREE_SAMPLE_DATA = [
    {
        "id": "duyla",
        "gender": "male",
        "picture": dad,
        "parents": [],
        "siblings": [],
        "spouses": [
            {
                "id": "thanhla",
                "type": "married"
            }
        ],
        "children": [
            {
                "id": "samla",
                "type": "blood"
            },
            {
                "id": "teresala",
                "type": "blood"
            },
            {
                "id": "allanla",
                "type": "blood"
            },
            {
                "id": "anitala",
                "type": "blood"
            }
        ]
    },
    {
        "id": "thanhla",
        "gender": "female",
        "picture": null,
        "parents": [],
        "spouses": [
            {
                "id": "duyla",
                "type": "married"
            }
        ],
        "children": [
            {
                "id": "samla",
                "type": "blood"
            },
            {
                "id": "teresala",
                "type": "blood"
            },
            {
                "id": "allanla",
                "type": "blood"
            },
            {
                "id": "anitala",
                "type": "blood"
            }
        ],
        "siblings": []
    },
    {
        "id": "samla",
        "gender": "male",
        "picture": sam,
        "spouses": [],
        "children": [],
        "parents": [
            {
                "id": "duyla",
                "type": "blood"
            },
            {
                "id": "thanhla",
                "type": "blood"
            }
        ],
        "siblings": [
            {
                "id": "teresala",
                "type": "blood"
            },
            {
                "id": "allanla",
                "type": "blood"
            },
            {
                "id": "anitala",
                "type": "blood"
            }
        ]
    },
    {
        "id": "teresala",
        "gender": "female",
        "spouses": [],
        "children": [],
        "picture": teresa,
        "parents": [
            {
                "id": "duyla",
                "type": "blood"
            },
            {
                "id": "thanhla",
                "type": "blood"
            }
        ],
        "siblings": [
            {
                "id": "samla",
                "type": "blood"
            },
            {
                "id": "allanla",
                "type": "blood"
            },
            {
                "id": "anitala",
                "type": "blood"
            }
        ]
    },
    {
        "id": "allanla",
        "gender": "male",
        "spouses": [],
        "children": [],
        "picture": allan,
        "parents": [
            {
                "id": "duyla",
                "type": "blood"
            },
            {
                "id": "thanhla",
                "type": "blood"
            }
        ],
        "siblings": [

            {
                "id": "teresala",
                "type": "blood"
            },
            {
                "id": "samla",
                "type": "blood"
            },
            {
                "id": "anitala",
                "type": "blood"
            }
        ]
    },
    {
        "id": "anitala",
        "gender": "female",
        "spouses": [],
        "children": [],
        "picture": anita,
        "parents": [
            {
                "id": "duyla",
                "type": "blood"
            },
            {
                "id": "thanhla",
                "type": "blood"
            }
        ],
        "siblings": [

            {
                "id": "teresala",
                "type": "blood"
            },
            {
                "id": "allanla",
                "type": "blood"
            },
            {
                "id": "samla",
                "type": "blood"
            }
        ]
    }
];

function imageToBase64(image) {
    let img = new Image();
    img.src = image;;
    // Create canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    // Set width and height
    canvas.width = img.width;
    canvas.height = img.height;
    // Draw the image
    ctx.drawImage(img, 0, 0);
    //return canvas.toDataURL('image/jpeg');
    return `data:`
}

function getBase64Image(image, callback) {
    let img = new Image();
    img.onload = () => {
        // Create canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        // Set width and height
        canvas.width = img.width;
        canvas.height = img.height;
        // Draw the image
        ctx.drawImage(img, 0, 0);
        let dataURL = canvas.toDataURL("image/png");
        dataURL = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
        callback(dataURL); // the base64 image

    };

    // set attributes and src 
    img.setAttribute('crossOrigin', 'anonymous');
    img.src = image;
}

