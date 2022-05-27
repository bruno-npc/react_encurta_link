import {useState, useEffect} from 'react'

import './links.css'
import {FiArrowDownLeft, FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import {getLinksSave, deleteLink} from '../../Services/storeLinks'
import LinkItem from '../../components/LinkItem'

export default function Links() {

    //Estado para exibir itens
    const [myLinks, setMyLinks] = useState([]);
    const [data, setData] = useState({});

    const [showModal, setShowModal] = useState(false);
    const [emptyList, setEmptyList] = useState(false);

    //busca de links
    useEffect(() => {
      async function getLinks (){
        const result = await getLinksSave('@encurtaLink')
        
        if(result.length === 0){
          //lista vazia.
          setEmptyList(true)
        }

        setMyLinks(result);

      }

      getLinks();

    }, [])

    function handleOpenLink(Link){
      setData(Link)
      setShowModal(true)
    }

    async function handleDelete(id){
      const result = await deleteLink(myLinks, id)

      if(result.length === 0){
        setEmptyList(true)
      }
      setMyLinks(result)
    }

    return (
      <div className='conteiner-links'>

        <div className='links-header'>
          <Link to="/">
            <FiArrowLeft size={38} color="#FFF"/>
          </Link>
            <h1>Meus Links</h1>
        </div>

        {emptyList && (
          <div className='links-item'>
            <h2 className='empty-text'>
              Sua lista esta vazia...
            </h2>
          </div>
        )}

        {myLinks.map(Link => (
           <div key={Link.id} className='links-item'>
               <button className='link' onClick={() => handleOpenLink(Link)}>
                <FiLink size={18} color="#FFF"/>
                {Link.long_url}
              </button>
              <button className='link-delete' onClick={() => handleDelete(Link.id)}>
                <FiTrash size={24} color= "#FF5454"/>
              </button>
           </div>
        ))}

        {showModal && (
          <LinkItem
            closeModal={() => setShowModal(false)}
            content={data}
          />
        )}

      </div>
    );
  }