import CustomButton from "./CustomButton";


const FilePicker = ({file, setFile, readFile}) => {
  return <div className="filepicker-container top-4 ">
    <div>
      <input type="file" accept="image/" id="file-upload" onChange={(e) => setFile(e.target.files[0])} />
      <label htmlFor="file-upload" className="filepicker-label">Upload File</label>

      <p className="mt-2 trxt-gray-500 text-xs truncate">{ file === ''? 'No file Selected' : file.name }</p>
    </div>

    <div className="flex mt-28 flex-wrap">
      <CustomButton
        type="outline"
        title="Logo"
        handleClick={() => readFile('logo')}
        customStyles='text-xs glassmorphism'
      />
      <CustomButton
        type="filled"
        title="Full"
        handleClick={() => readFile('logo')}
        customStyles='text-xs ms-2'
      />
    </div>
  </div>;
};

export default FilePicker;
