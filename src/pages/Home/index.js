import {FiLink} from 'react-icons/fi';
import './home.css';

import {useState} from 'react'
import '../../components/Menu/index'
import Menu from '../../components/Menu/index';
import LinkItem from '../../components/LinkItem/index';
import api from '../../Services/api';
import {saveLink} from '../../Services/storeLinks'

export default function Home() {
  const [link, setLink] = useState ('');
  const [showModal, setShowModal] = useState (false); 
  const [data, setData] = useState({});

    async function handleShortLink(){
      try{
        const response = await api.post('/shorten', {long_url: link})
        setData(response.data);
        setShowModal(true);

        saveLink('@encurtaLink', response.data)

        setLink('');
      }
      catch{
        alert("Ops, algo deu errado!")
        setLink('');
      }
    }

    return (
      <div className="conteiner-home">
        
        <div className="logo">
          <img src="/logo.png" alt="Link-Logo"/>
          <h1>Link Encurtador</h1>
          <span>🔻 Cole seu link para encurtar! 🔻</span>
        </div>

        <div className="area-input">
          
          <div>
            <FiLink  size={24} color="#fff"/>
            <input placeholder='Cole seu link aqui!' 
              value={link}
              onChange={(e) => setLink(e.target.value)} />
          </div>

          <button onClick={handleShortLink}>
            Encurtar Link
          </button>

        </div>

        <Menu/>
        
        { showModal && (
          <LinkItem closeModal={() => setShowModal(false)}
          content={data}
          />
        ) }

      </div>
    )
  }