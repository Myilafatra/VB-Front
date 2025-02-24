import React, { Component } from 'react';
import axios from 'axios';
export default class PropAtelier extends Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] };

    }
    componentDidMount() {
        axios.get("https://polar-reef-70255.herokuapp.com/achatLivrePerso/")
            .then(response => {
                console.log('achat resultat  = ', response.data)
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    liste() {
        return <table className="table-bordered mt-5" id="acheter">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Titre</th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {
                    (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {

                        return <tr key={obj._id}>
                            <td>
                                <img width="150px" height="50px" src={'https://polar-reef-70255.herokuapp.com/newArticleImage/' + obj.image} alt="pdp" />
                            </td>
                            <td>{obj.titre}</td>
                            <td>{obj.nom}</td>
                            <td>{obj.prenom}</td>
                            <td>{obj.email}</td>
                            <td>{obj.phone}</td>
                           
                            {/* <td>
                                <Link to={"/modifierAtl/" + obj._id} className="btn deconex">Modifier</Link> <br /><br />
                                <center>
                                    {obj.visib === true ? (<button className="deconex" onClick={(e) => {
                                        e.preventDefault()
                                        axios.get("https://polar-reef-70255.herokuapp.com/cacherAtl/" + obj._id).then(res => {
                                            axios.get("https://polar-reef-70255.herokuapp.com/afficher/"+localStorage.getItem('id')).then(res => {
                                                console.log(res.data)
                                                this.setState({ profil: res.data })
                                            })
                                            console.log(res.data)
                                        })
                                    }}>Desactiver</button>) : (<button className="deconex" onClick={(e) => {
                                        e.preventDefault()
                                        console.log(obj._id)
                                        axios.get("https://polar-reef-70255.herokuapp.com/affichAtl/" + obj._id).then(res => {
                                            axios.get('https://polar-reef-70255.herokuapp.com/afficher/' + localStorage.getItem('id')).then(res => {
                                                console.log(res.data)
                                                this.setState({ profil: res.data })
                                            })
                                            console.log(res.data)
                                        })

                                    }}>Activer</button>)}
                                </center>
                            </td> */}
                        </tr>

                    })) : ('')
                }
            </tbody>
        </table>
    }
    render() {
        return (
            <div className='app1'>
                {this.liste()}
            </div>
        );
    }
}