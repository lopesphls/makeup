import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import logo from '../../assets/logo.png'
import './style.scss'

export default function Navbar() {
  const [active, setActive] = useState(false)
  const [menu, setMenu] = useState('')

  useEffect(() => {
    if (!active) {
      return setMenu('navbar')
    } else {
      return setMenu('collapse')
    }
  }, [active])

  return (
    <motion.div className={menu}>
      <button className='Menu'>
        {!active ? (
          <AiOutlineMenu onClick={() => setActive(true)} />
        ) : (
          <AiOutlineClose onClick={() => setActive(false)} />
        )}
      </button>
      <div className='imagem'>
        <img src={logo} alt='logomarca' />
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Produtos</li>
          <li>Contato</li>
        </ul>
      </nav>
    </motion.div>
  )
}
