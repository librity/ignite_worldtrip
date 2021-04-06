import React, { useEffect, useState, useRef } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Image,
  ModalBody,
  ModalCloseButton,
  Flex,
  Wrap,
} from '@chakra-ui/react'

import Fallback from './Fallback'
import Header from './Header'
import SeeMore from './SeeMore'

interface ModalInfo {
  city: string
  query: string
}

interface PhotosModalProps {
  modalInfo: ModalInfo
  isOpen: boolean
  onClose: () => void
}

const MainImage = React.lazy(() => import('./MainImage'))

const CityModal = ({ modalInfo, isOpen, onClose }: PhotosModalProps) => {
  const modalHeaderRef = useRef(null)
  const [mainImage, setMainImage] = useState(null)
  const [images, setImages] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    modalHeaderRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }, [mainImage])

  useEffect(() => {
    async function searchImages() {
      setLoading(true)
      await fetch(`/api/images?query=${modalInfo.query}`)
        .then(response => {
          return response.json()
        })
        .then(response => {
          setMainImage(response[0])
          setImages(response)
        })
      setLoading(false)
    }
    searchImages()
  }, [modalInfo])

  return (
    <Modal
      size="4xl"
      onClose={onClose}
      isOpen={isOpen}
      scrollBehavior={'outside'}
      initialFocusRef={modalHeaderRef}
    >
      <ModalOverlay />
      <ModalContent ref={modalHeaderRef} minHeight="80%">
        <ModalHeader>
          <Header title={modalInfo.city} />
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex width="100%" align="center" justify="center">
            <Flex width="95%" maxWidth="760px" flexDir="column" align="center">
              {loading ? (
                <Fallback />
              ) : (
                <>
                  <React.Suspense fallback={<Fallback />}>
                    <MainImage src={mainImage} />
                  </React.Suspense>
                  <Wrap mt="2rem" align="flex-start" justify="center">
                    {images.map(image => (
                      <Image
                        key={`thumb-${image}`}
                        width="180px"
                        height="auto"
                        src={image}
                        onClick={() => setMainImage(image)}
                        cursor="pointer"
                      />
                    ))}
                  </Wrap>
                  <SeeMore
                    href={`https://unsplash.com/s/photos/${modalInfo.query}`}
                  />
                </>
              )}
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default CityModal
