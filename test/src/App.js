import './App.css';

const styles = {
  ul: {
    listStyle: 'none',
    display: 'flex',
  },
  li: {
    color: 'white',
    cursor: 'pointer',
    margin: '1rem',
  },
  a: {
    color: 'white',
    textDecoration: 'none',
  },
  div: {
    display: 'flex',
    alignItems: 'center'
  },
  input: {
    width: '200px',
    height: '20px',
    marginRight: '1rem'
  },
  button: {
    '&:hover': {
      color: 'red'
    }
  }
}

function App() {
  return (
   <div className='wrapper'>
     <h1>TEST</h1>
     <div style={styles.div}>
     <ul style={styles.ul}>
       <li style={styles.li}><a style={styles.a} href='https://www.google.com/'>Home</a></li>
       <li style={styles.li}><a style={styles.a} href='https://www.google.com/'>About</a></li>
       <li style={styles.li}><a style={styles.a} href='https://www.google.com/'>Contact</a></li>
       <li style={styles.li}><a style={styles.a} href='https://www.google.com/'>Info</a></li>
       <li style={styles.li}><a style={styles.a} href='https://www.google.com/'>Doc</a></li> 
       <li style={styles.li}><a style={styles.a} href='https://www.google.com/'>Phone</a></li>
     </ul>

    <input style={styles.input} type='text' placeholder='search'/>
    <button>click for search</button>
    </div>
   </div> 
  )
}

export default App;
