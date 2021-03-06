import React, { useState } from 'react';
import styled from 'styled-components';

function AddProjectModal({ closeModalFunction }) {
    const [closeModal, setCloseModal] = useState(true);
    //const [members, setMembers] = useState("");
    const [result, setResult] = useState("");

    var arr = ["test1@email.com ", "test2@email.net "
        , "heejin@gmail.com ", "tech@naver.com "
    ];

    const inputMembers = (e) => {
        //setMembers(e.target.value);
        //console.log(e.target.value);
        let member = e.target.value;  //input data 저장하기
        let filterData = arr.filter((i) => 
            i.toLowerCase().includes(member.toLowerCase())
        );   //배열 데이터에 필터를 돌려 데이터를 소문자로 변환
        //입력값이 저장된 변수를 소문자로 변환시켜 같은 문자열이 포함되면 필터 데이터에 저장

        if(member.length === 0) {
            filterData = [];
        }

        setResult(filterData);
        console.log(filterData);
    }

    const onSearch = () => {
        var r = result.toLowerCase();
    }

    closeModalFunction(closeModal);

    return (
        <ModalBackground>
            <div style={{
                backgroundColor: 'white',
                paddingTop: '2%',
                paddingBottom: '2%',
                paddingLeft: '3%',
                paddingRight: '3%',
                display: 'inline-block',
                marginTop: '10%',
            }}>
                <img src='assets/icons/close.png' alt='close' style={{
                    width: '10px',
                    height: '10px',
                    float: 'right',
                    verticalAlign: 'top'
                }}
                onClick={function() {setCloseModal(false)}}></img>
                <h3>Create your project ✌️</h3>
            <form>
                <table>
                    <tr>
                        <td><b>Project title</b></td>
                        <td><TextInput type="text" name='title'></TextInput></td>
                    </tr>
                    <tr>
                        <td><b>Member</b></td>
                        <td><TextInput type="text" name='members' onChange={inputMembers} placeholder='hello@test.com'></TextInput>
                            {result}
                        </td>
                        <td><button type='button' onClick={onSearch}>search</button></td>
                    </tr>
                    <tr>
                        <td><b>description</b></td>
                        <td><TextInput type="text" name='description'></TextInput></td>
                    </tr>
                </table>
                <CreateButton>create</CreateButton>
            </form>
            </div>
        </ModalBackground>
    );
}

const TextInput = styled.input`
    border-width: 1px;
    border-color: gray;
`

const CreateButton = styled.button`
    font-family: 'GmarketSansMedium';
    width: 400px;
    height: 40px;
    background-color: #E6F7FF;
    margin-top: 10px;
    border-width: 0px;
`

const ModalBackground = styled.div`
    position: fixed;
    background-color: rgba(0,0,0,0.50);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
`

const DropDownContainer = styled.div`
    
`

export default AddProjectModal;