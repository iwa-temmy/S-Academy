import { useEffect, useState } from "react";
import { Box, IconButton, Stack } from "@mui/material";
import { useTheme } from "@mui/styles";
import EmptyChapter from "./EmptyChapter";
import Accordion from "../../../../components/accordion/Accordion";
import AccordionItem from "../../../../components/accordion/AccordionItem";
import { FiEdit } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";
import AppButton from "../../../../components/AppButton";
import CourseContentModalActions from "./CourseContentModalActions";
import AddContentMenu from "./AddContentMenu";
import AboutChapterModal from "./AboutChapterModal";
import VideoUploadModal from "./VideoUploadModal";
import EmbedVideoUrlModal from "./EmbedVideoUrlModal";
import DownloadableDocModal from "./DownloadableDocModal";

const AddCourseContent = ({ courseId }) => {
  const theme = useTheme();

  //state
  const [chapters, setChapters] = useState([]);
  const [activeChapter, setActiveChapter] = useState(null);
  const [accordionOpen, setAccordionOpen] = useState({});
  const [modalOpen, setModalOpen] = useState(null);
  const [videoUploadModal, setVideoUploadModal] = useState(false);
  const [embedVideoModal, setEmbedVideoModal] = useState(false);
  const [videoSource, setVideoSource] = useState("");
  const [downloadableDocModal, setDownloadableDocModal] = useState(false);

  //functions
  const saveChapterName = (e, index) => {
    const { value, name } = e.target;
    const newChapters = chapters || [];
    newChapters[index] = { ...newChapters?.[index], [name]: value };
    setChapters([...newChapters]);
  };
  const addCourseChapter = () => {
    setChapters([
      ...chapters,
      {
        name: "",
        number: chapters?.length + 1,
        about: "",
        course: courseId,
      },
    ]);
  };

  const deleteLastChapter = () => {
    const copiedChapters = [...chapters];
    setChapters(copiedChapters?.slice(0, -1));
  };

  const handlAccordionToggle = (index) => {
    setAccordionOpen({ ...accordionOpen, [index]: !accordionOpen[index] });
  };

  const openModal = (type, chapter, data) => {
    setModalOpen(type);
    setActiveChapter(chapter);
  };
  const closeModal = () => {
    setModalOpen(null);
    setActiveChapter(null);
  };

  const openVideoUploadModal = (data) => {
    setVideoUploadModal(true);
    setActiveChapter(data);
  };
  const closeVideoUploadModal = () => {
    setVideoUploadModal(false);
    setActiveChapter(null);
  };
  const openEmbedVideoModal = (source, data) => {
    setEmbedVideoModal(true);
    setVideoSource(source);
    setActiveChapter(data);
  };
  const closeEmbedVideoModal = () => {
    setEmbedVideoModal(false);
    setVideoSource("");
    setActiveChapter(null);
  };
  const openDownloadableDocModal = (data) => {
    setDownloadableDocModal(true);
    setActiveChapter(data);
  };
  const closeDownloadableDocModal = () => {
    setDownloadableDocModal(false);
    setActiveChapter(null);
  };
  useEffect(() => {
    if (chapters?.length) {
      chapters?.forEach((chapter, index) => {
        console.log(chapter);
        setAccordionOpen({ [index]: true });
      });
    }
  }, [chapters]);
  return (
    <div>
      {chapters?.length ? (
        <Box sx={{ p: 2 }}>
          {chapters?.map((chapter, index) => (
            <>
              <Accordion key={index}>
                <AccordionItem
                  title={
                    <>
                      <span className="text-sm font-semibold text-[#46464A] pr-1">
                        {chapter.number} .
                      </span>
                      <input
                        name="name"
                        className="text-sm font-semibold text-[#919094] outline-none"
                        placeholder="Type Chapter name"
                        onChange={(e) => saveChapterName(e, index)}
                        value={chapter?.name}
                      />
                    </>
                  }
                  isActive={accordionOpen[index]}
                  onChange={() => handlAccordionToggle(index)}
                  actions={
                    <>
                      <AppButton
                        variant="text"
                        color="secondary"
                        startIcon={<FiEdit size="10px" />}
                        sx={{
                          fontSize: 10,
                          minWidth: "unset",
                          fontWeight: 500,
                          p: 0,
                          "&:hover": {
                            backgroundColor: "transparent !important",
                          },
                        }}
                        onClick={() => openModal("write", chapter)}
                        name="Write about chapter"
                      />
                      <IconButton
                        aria-label="delete"
                        sx={{
                          minWidth: "unset",
                          fontSize: 20,
                          p: 0,
                          color: theme.palette.error[60],
                        }}
                      >
                        <HiOutlineTrash />
                      </IconButton>
                    </>
                  }
                  content={
                    <Stack direction="column" alignItems="flex-start">
                      <AddContentMenu
                        chapter={chapter}
                        openVideoUploadModal={openVideoUploadModal}
                        openEmbedVideoModal={openEmbedVideoModal}
                        openDownloadableDocModal={openDownloadableDocModal}
                      />
                    </Stack>
                  }
                />
              </Accordion>
              <CourseContentModalActions
                addCourseChapter={addCourseChapter}
                deleteLastChapter={deleteLastChapter}
                chapters={chapters}
                index={index}
              />
            </>
          ))}
        </Box>
      ) : (
        <EmptyChapter addCourseChapter={addCourseChapter} />
      )}

      <AboutChapterModal
        open={modalOpen === "write"}
        handleClose={closeModal}
      />
      <VideoUploadModal
        open={videoUploadModal}
        handleClose={closeVideoUploadModal}
        activeChapter={activeChapter}
      />
      <EmbedVideoUrlModal
        open={embedVideoModal}
        handleClose={closeEmbedVideoModal}
        source={videoSource}
        activeChapter={activeChapter}
      />
      <DownloadableDocModal
        open={downloadableDocModal}
        handleClose={closeDownloadableDocModal}
        activeChapter={activeChapter}
      />
    </div>
  );
};

export default AddCourseContent;
