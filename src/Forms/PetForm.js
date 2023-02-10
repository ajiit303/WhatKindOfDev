import './PetForm.css';

function PetForm() {
  return (
    <div className="pet-form">
      <p>Do you like cats or dogs?</p>
    
      <span>
        <input type="checkbox" id="pet" name="pet" value="Cat" />
        <label htmlFor="pet">Cats 😻</label>
        </span>
        <span>
        <br />
        <input type="checkbox" id="dog" name="dog" value="Dog" />          
        <label htmlFor="dog">Dogs 🐶</label>
      </span>
    </div>
  );
}

export default PetForm;
