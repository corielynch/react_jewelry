import React from 'react';
import { look } from "../../assets/look.png";

const Lookbook = () => {
    return (
      <div>
          <hr />
        <div class="container">
            <div class="image">
                <img src={ look } alt= 'photos of jewelry' />
            </div>
        </div>
        <hr />
    </div>
    )
}
export default Lookbook;