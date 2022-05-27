import './linkItem.css'
import {FiX} from 'react-icons/fi'
import {FaLink} from 'react-icons/fa'

export default function LinkItem({ closeModal, content }){
    
    async function copyLink(){
        await navigator.clipboard.writeText(content.link);
        alert('URL copiada com sucesso!')
    }
    
    return(
        <div className='modal-conteiner'>
            <div className='modal-header'>
                <h2>Link encurtado</h2>
                <button onClick={closeModal}>
                    <FiX size={25} color='#000'/>
                </button>
            </div>

            <span>
                {content.long_url}
            </span>
            
            <button className='modal-link' onClick={copyLink}>
                {content.link}
                <FaLink size={18} color='#fff'/>
            </button>
        </div>
    )
}