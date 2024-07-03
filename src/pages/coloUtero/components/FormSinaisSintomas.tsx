import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { IonContent, IonSpinner } from '@ionic/react'
import styled from 'styled-components'
import AppLayout from '../../../components/appLayout'
import { useHistory } from 'react-router'
import { fBuscaInfoPages } from '../../../services/pagesInfo'
import { IDataFormPayload } from './types'

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Container = styled.div`
  border-radius: 10px;
  padding: 20px;
  margin: 40px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`

const Title = styled.div`
  font-size: 20px;
  margin-bottom: 45px;
`

const Question = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 45px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

const Button = styled.button`
  width: auto;
  max-width: 80%;
  height: auto;
  font-size: 20px;
  background-color: pink;
  border-radius: 10px;
  color: white;
  padding: 10px;
`

const WrapperOption = styled.div`
  display: flex;
  flex-direction: column;
`

const Option = styled.div``

const Warning = styled.div`
  border: 1px solid red;
  background: red;
  color: white;
  border-radius: 5px;
  padding: 15px;
`

const FormSinaisSintomasColoUtero: React.FC = () => {
  const history = useHistory()
  const [contentData, setContentData] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [dataSubmit, setDataSubmit] = useState<IDataFormPayload>({
    dias: 0,
    menor_idade: '',
    pomada: '',
    relacao_dias: '',
    relacao_sexual: '',
    responsavel: '',
  })
  const [error, setError] = useState({
    error_dias: false,
    error_menor_idade: false,
    error_pomada: false,
    error_relacao_dias: false,
    error_relacao_sexual: false,
    error_responsavel: false,
  })

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fBuscaInfoPages('sinais_sintomas_colo_utero')
        setContentData(data)
      } catch (error) {
        console.error('Erro ao buscar dados do banco:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleChangeDias = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setDataSubmit((prev) => ({
      ...prev,
      error: parseInt(value) > 8 ? true : false,
      [name]: value,
    }))

    if (parseInt(value) > 8) setError({ ...error, error_dias: true })
    else setError({ ...error, error_dias: false })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault
    // remove error key
    delete dataSubmit.error

    //logic to save in database
  }

  console.log(dataSubmit)

  return (
    <AppLayout title='Sinais e Sintomas' history={history}>
      <IonContent>
        {loading ? (
          <LoadingContainer>
            <SpinnerWrapper>
              <IonSpinner name='crescent' />
            </SpinnerWrapper>
          </LoadingContainer>
        ) : (
          <Container>
            <Title>{contentData?.title}</Title>
            <form onSubmit={handleSubmit}>
              <Question>
                <Column>Você já teve relação sexual?</Column>
                <Column>
                  <WrapperOption>
                    <Option>
                      <input
                        type='radio'
                        id={`relacao_sexual_sim`}
                        name={'relacao_sexual'}
                        value='sim'
                        onChange={() => {
                          setDataSubmit({ ...dataSubmit, relacao_sexual: 'sim' })
                          setError({ ...error, error_relacao_sexual: false })
                        }}
                        required={true}
                      />
                      <label htmlFor={`relacao_sexual_sim`}> Sim</label>
                    </Option>
                    <Option>
                      <input
                        type='radio'
                        id={`relacao_sexual_nao`}
                        name={'relacao_sexual'}
                        value='nao'
                        onChange={() => {
                          setDataSubmit({ ...dataSubmit, relacao_sexual: 'nao', error: true })
                          setError({ ...error, error_relacao_sexual: true })
                        }}
                        required={true}
                      />
                      <label htmlFor={`relacao_sexual_nao`}> Não</label>
                    </Option>
                  </WrapperOption>
                </Column>
              </Question>

              {dataSubmit.relacao_sexual === 'nao' && (
                <Question>
                  <Column>
                    <Warning>
                      Desculpe, o exame preventivo de colo de útero anual é recomendado a partir do momento que você
                      tiver relações sexuais.
                    </Warning>
                  </Column>
                </Question>
              )}

              <Question>
                <Column>Você é menor de idade?</Column>
                <Column>
                  <WrapperOption>
                    <Option>
                      <input
                        type='radio'
                        id={`menor_idade_sim`}
                        name={'menor_idade'}
                        value='sim'
                        onChange={() => {
                          setDataSubmit({ ...dataSubmit, menor_idade: 'sim' })
                        }}
                        required={true}
                      />
                      <label htmlFor={`menor_idade_sim`}> Sim</label>
                    </Option>
                    <Option>
                      <input
                        type='radio'
                        id={`menor_idade_nao`}
                        name={'menor_idade'}
                        value='nao'
                        onChange={() => {
                          setDataSubmit({ ...dataSubmit, menor_idade: 'nao', responsavel: 'sim' })
                        }}
                        required={true}
                      />
                      <label htmlFor={`menor_idade_nao`}> Não</label>
                    </Option>
                  </WrapperOption>
                </Column>
              </Question>

              {dataSubmit.menor_idade === 'sim' && (
                <Question>
                  <Column>Você está acompanhada do responsável?</Column>
                  <Column>
                    <WrapperOption>
                      <Option>
                        <input
                          type='radio'
                          id={`responsavel_sim`}
                          name={'responsavel'}
                          value='sim'
                          onChange={() => {
                            setDataSubmit({ ...dataSubmit, responsavel: 'sim' })
                            setError({ ...error, error_responsavel: false })
                          }}
                          required={true}
                        />
                        <label htmlFor={`responsavel_sim`}> Sim</label>
                      </Option>
                      <Option>
                        <input
                          type='radio'
                          id={`responsavel_nao`}
                          name={'responsavel'}
                          value='nao'
                          onChange={() => {
                            setDataSubmit({ ...dataSubmit, responsavel: 'nao', error: true })
                            setError({ ...error, error_responsavel: true })
                          }}
                          required={true}
                        />
                        <label htmlFor={`responsavel_nao`}> Não</label>
                      </Option>
                    </WrapperOption>
                  </Column>
                </Question>
              )}

              {dataSubmit.responsavel === 'nao' && (
                <Question>
                  <Warning>
                    <Column>Desculpe, é necessário estar acompanhado do responsável para realizar o exame</Column>
                  </Warning>
                </Question>
              )}

              <Question>
                <Column>Você usou alguma pomada recentemente?</Column>
                <Column>
                  <WrapperOption>
                    <Option>
                      <input
                        type='radio'
                        id={`pomada_sim`}
                        name={'pomada'}
                        value='sim'
                        onChange={() => {
                          setDataSubmit({ ...dataSubmit, pomada: 'sim', error: true })
                          setError({ ...error, error_pomada: true })
                        }}
                        required={true}
                      />
                      <label htmlFor={`pomada_sim`}> Sim</label>
                    </Option>
                    <Option>
                      <input
                        type='radio'
                        id={`pomada_nao`}
                        name={'pomada'}
                        value='nao'
                        onChange={() => {
                          setDataSubmit({ ...dataSubmit, pomada: 'nao' })
                          setError({ ...error, error_pomada: false })
                        }}
                        required={true}
                      />
                      <label htmlFor={`pomada_nao`}> Não</label>
                    </Option>
                  </WrapperOption>
                </Column>
              </Question>

              {dataSubmit.pomada === 'sim' && (
                <Question>
                  <Warning>
                    <Column>Desculpe, o exame não pode ser realizado se você estiver usando pomada</Column>
                  </Warning>
                </Question>
              )}

              <Question>
                <Column>Quantos dias se passaram desde o último dia da sua menstruação?</Column>
                <Column>
                  <WrapperOption>
                    <Option>
                      <input type='number' id={`dias`} name={'dias'} onChange={handleChangeDias} required={true} />
                    </Option>
                  </WrapperOption>
                </Column>
              </Question>

              {dataSubmit.dias > 8 && (
                <Question>
                  <Warning>
                    <Column>Desculpe, o exame deve ser realizado 8 dias após o último dia da menstruação.</Column>
                  </Warning>
                </Question>
              )}

              <Question>
                <Column>Você teve relação sexual nos últimos 3 dias?</Column>
                <Column>
                  <WrapperOption>
                    <Option>
                      <input
                        type='radio'
                        id={`relacao_dias_sim`}
                        name={'relacao_dias'}
                        value='sim'
                        onChange={() => {
                          setDataSubmit({ ...dataSubmit, relacao_dias: 'sim' })
                          setError({ ...error, error_relacao_dias: true })
                        }}
                        required={true}
                      />
                      <label htmlFor={`relacao_sexual_sim`}> Sim</label>
                    </Option>
                    <Option>
                      <input
                        type='radio'
                        id={`relacao_dias_nao`}
                        name={'relacao_dias'}
                        value='nao'
                        onChange={() => {
                          setDataSubmit({ ...dataSubmit, relacao_dias: 'nao', error: false })
                          setError({ ...error, error_relacao_dias: false })
                        }}
                        required={true}
                      />
                      <label htmlFor={`relacao_dias_nao`}> Não</label>
                    </Option>
                  </WrapperOption>
                </Column>
              </Question>

              {dataSubmit.relacao_dias === 'sim' && (
                <Question>
                  <Column>
                    <Warning>
                      Desculpe, o exame não pode ser realizado se você teve relação sexual nos últimos 3 dias.
                    </Warning>
                  </Column>
                </Question>
              )}
              <Button disabled={Object.values(error).some((value) => value === true)} type='submit'>
                {Object.values(error).some((value) => value === true)
                  ? 'Desculpe, você não está apto(a) a realizar o exame preventivo de colo de útero anual no momento. Por favor, siga as orientações e tente novamente'
                  : 'Enviar'}
              </Button>
            </form>
          </Container>
        )}
      </IonContent>
    </AppLayout>
  )
}

export default FormSinaisSintomasColoUtero
