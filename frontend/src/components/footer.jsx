import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import '../components/footer.css';
export default function Footer() {
  return (
    <center>
      <MDBFooter className='footer'>
        <div className='text-center'>
          <a href='https://github.com/this-is-singh19/tbdetectx/tree/REACTDJANGOIMPLEMENTATION'>
          <img src="https://github.com/github.png" alt="GitHub Logo" style={{ width: '25px', height: '25px' }} />
          </a>
        </div>
      </MDBFooter>
    </center>
  );
}