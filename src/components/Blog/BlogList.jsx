import firebase from '../../firebaseConfig'; 
import Blog from './Blog.jsx'
import NewBlog from './BlogNew.jsx';
import React from 'react';

 let blogs = [
    {
      title: "Mixtape veniam kogi chambray kale chips",
      body: "Nisi adipisicing dolore, cardigan kitsch lumbersexual. Do pop-up selfies kickstarter minim. Voluptate art party occupy migas coloring book vegan. Shoreditch meggings hot chicken, 3 wolf moon austin non crucifix sriracha umami chillwave fingerstache ramps blue bottle anim. Sriracha prism kinfolk, art party chicharrones chia nisi tempor brooklyn PBR&B small batch dreamcatcher wolf organic 3 wolf moon. Ennui woke flannel, brooklyn green juice put a bird on it tattooed migas tumeric. Meh lo-fi nostrud before they sold out dolore. Deep v nostrud tote bag post-ironic pickled magna, irure raw denim pinterest humblebrag synth excepteur cardigan adipisicing. Succulents cold-pressed four loko mlkshk live-edge lyft four dollar toast pour-over squid. Keffiyeh 3 wolf moon swag normcore kinfolk deserunt anim venmo. Cray lo-fi freegan deserunt dolore tote bag skateboard snackwave mlkshk poke ennui kogi. Shabby chic ut thundercats, umami shaman aute green juice godard ennui tousled."
    },
    {
      title: "Chambray kale chips ",
      body: "Nisi adipisicing dolore, cardigan kitsch lumbersexual. Do pop-up selfies kickstarter minim. Voluptate art party occupy migas coloring book vegan. Shoreditch meggings hot chicken, 3 wolf moon austin non crucifix sriracha umami chillwave fingerstache ramps blue bottle anim. Sriracha prism kinfolk, art party chicharrones chia nisi tempor brooklyn PBR&B small batch dreamcatcher wolf organic 3 wolf moon. Ennui woke flannel, brooklyn green juice put a bird on it tattooed migas tumeric. Meh lo-fi nostrud before they sold out dolore. Deep v nostrud tote bag post-ironic pickled magna, irure raw denim pinterest humblebrag synth excepteur cardigan adipisicing. Succulents cold-pressed four loko mlkshk live-edge lyft four dollar toast pour-over squid. Keffiyeh 3 wolf moon swag normcore kinfolk deserunt anim venmo. Cray lo-fi freegan deserunt dolore tote bag skateboard snackwave mlkshk poke ennui kogi. Shabby chic ut thundercats, umami shaman aute green juice godard ennui tousled."
    },
  ]


const BlogList = props => {

  return(
    <React.Fragment>
      <Blog />
      <NewBlog />
    </React.Fragment>
  )
}

export default BlogList;