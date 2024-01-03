import { useContext, useState } from 'react';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiSettings, FiUpload } from 'react-icons/fi';
import avatar from '../../assets/avatar.png';
import { AuthContext } from '../../contexts/auth';
import "./profile.css";
import { db, storage } from '../../services/firebaseConection';
import { doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';



export default function Profile(){
    const { user, storageUser, setUser, logout } = useContext(AuthContext);

    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl)
    const [imageAvatar, setImageAvatar] = useState(null);

    const [nome, setNome] = useState(user && user.nome)
    const [email, setEmail] = useState(user && user.email)

    function handleFile(event) {
        if(event.target.files[0]){
            const image = event.target.files[0];
            if(image.type === 'image/jpeg' || image.type === 'image/png'){
                setImageAvatar(image)
                setAvatarUrl(URL.createObjectURL(image))
            }else{
                alert('Esta Imagem nao é PNG ou JPEG')
                setImageAvatar(null)
                return;
            }
        }

    }

    async function handleUpload() {
        const currentUid = user.uid;

        const uploadRef = ref(storage, `images/${currentUid}/${imageAvatar.name}`)
        const uploadTask = uploadBytes(uploadRef, imageAvatar)
        .then((snapshot) => {

            getDownloadURL(snapshot.ref).then(async (downloadURL) => {
                let urlFoto = downloadURL;
                const docRef = doc(db, 'users', user.uid);
                await updateDoc(docRef, {
                    avatarUrl: urlFoto,
                    nome: nome
                })
                .then(() => {
                    let data = {
                        ...user,
                        nome: nome,
                        avatarUrl: urlFoto
                    }
                    setUser(data);
                    storageUser(data);
                    toast.success('Atualizado com sucesso!')
                })
            })
        })

    }

    async function handleSumit(event) {
        event.preventDefault();

        if (imageAvatar === null && nome !== '') {
            // Atualizar nome do usuario
            const docRef = doc(db, 'users', user.uid)
            await updateDoc(docRef, {
                nome: nome
            })
            .then(() => {
                let data = {
                    ...user,
                    nome: nome
                }
                setUser(data);
                storageUser(data);
                toast.success('Atualizado com sucesso!')
            })
            .catch((e) => {
                toast.error("Erro: " + e)
            })
        } else if (nome !== '' && imageAvatar !== null){
            // Atualizar nome e foto do usuario
            handleUpload()
        }
    }

    return(
        <div>
            <Header/>\
            <div className='content'>
                <Title name="Meu Perfil">
                    <FiSettings size={25} />
                </Title>


                <div className='container'>
                    <form className='form-profile' onSubmit={ handleSumit } >
                        <label className='label-avatar'>
                            <span>
                                <FiUpload color='#FFF' size={25}/>
                            </span>

                            <input type='file' accept='image/*' onChange={handleFile} /><br/>
                            { avatarUrl === null ? (
                                <img src={ avatar } alt='Foto Perfil' width={250} height={250}/>
                            ) : (
                                <img src={ avatarUrl } alt='Foto Perfil' width={250} height={250}/>
                            )}

                        </label>

                        <label>Nome:</label>
                        <input type='text' value={nome} onChange={(e) => setNome(e.target.value)}/>

                        <label>Email:</label>
                        <input type='text' value={email} disabled={true}/>

                        <button type='submit'>Salvar</button>

                    </form>
                </div>

                <div className='container'>
                    <button onClick={() => logout()} className='logout-btn'>Sair</button>
                </div>

            </div>

            

        </div>
    )
}