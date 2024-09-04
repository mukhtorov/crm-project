/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Modal } from "../../Generics/Modal";
import GenericInput from "../../Generics/Input";
import Subtitle from "../../Generics/Subtitle";
import Title from "../../Generics/Title";
import { Wrapper } from "./style";
import { roles } from "../../../mock/roles";
import { Checkbox } from "@mui/material";
import useFetch from "../../../hooks/useFetch";
import { useEffect, useState } from "react";
import Spinner from "../../Generics/Spinner";

export const AllLidsModal = (props) => {
  const [spinner, setSpinner] = useState(false);
  const [state, dispatch] = useState([]);
  const { data } = props;
  const request = useFetch();

  const getData = async () => {
    setSpinner(true);
    let role = await request(`/tabs/${data?.id}_role`);
    let res = [];
    let i = 0;
    role.forEach((element) => {
      if (element.label?.length) {
        res.push({
          title: element.label,
          list: [
            {
              status: element.status === "TRUE",
              title: element.title,
              id: element.id,
            },
          ],
        });
        i++;
      } else {
        res[i - 1] = {
          ...res[i - 1],
          list: [
            ...res[i - 1]?.list,
            {
              status: element.status === "TRUE",
              title: element.title,
              id: element.id,
            },
          ],
        };
      }
    });

    dispatch(res);

    setSpinner(false);
  };

  useEffect(() => {
    props?.data?.id ? getData() : dispatch(roles);
  }, [props.data]);

  const onClose = () => {
    props?.onClose();
    dispatch([]);
  };

  const onChange = (event, e) => {
    console.log(event, e.target.checked, "evv");
    // edit
    if (data?.id) {
      request(`/tabs/${data?.id}_role/id/*${event.id}*`, {
        method: "PATCH",
        body: { status: e.target.checked ? "TRUE" : "FALSE" },
      }).then(() => {
        props.reload();
      });
    }
  };

  return (
    <Modal {...props} onClose={onClose}>
      <Title size="34px">
        {data?.id ? `${data.title} Status` : "Role Qo'shish"}
      </Title>
      {/* full name */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Daraja
      </Subtitle>
      <GenericInput fontWeight={500} width={500} value={data?.title} />
      {/* yo'nalish */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Daraja izohi
      </Subtitle>
      <GenericInput fontWeight={500} width={500} value={data?.message} />
      <Wrapper>
        {spinner ? (
          <Spinner />
        ) : (
          state?.map(({ title, list }) => {
            return (
              <Wrapper.Left key={title}>
                <Wrapper.Title>{title}</Wrapper.Title>
                <div>
                  {list?.map((data) => {
                    const { status, title } = data;
                    return (
                      <div key={title}>
                        <Checkbox
                          defaultChecked={status}
                          onChange={(e) => onChange(data, e)}
                        />{" "}
                        {title}
                      </div>
                    );
                  })}
                </div>
              </Wrapper.Left>
            );
          })
        )}
      </Wrapper>
    </Modal>
  );
};

export default AllLidsModal;
