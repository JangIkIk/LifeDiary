import { useModel } from "../model/useModel";
import { S } from "./style";
import defaultDiary1 from "../assets/defaultDiary1.png";
import description from "../assets/description.png";
import { DefaultBtn } from "@shared/ui";


export const Introduction = ()=>{
    const {onClickRoute} = useModel();
    return(
        <>
        <S.Introduction>
                    <S.SectionFirst $img={description}>
                        <S.SectionFirstContent>
                            <h1>인생일기</h1>
                            <p>{`하루일상을\n일기로 관리 해보세요\n\n꾸준한 기록으로 과거를 기록하세요.\n자신의 과거를 기억하는 좋은방법!\n그날의 기분은 색상으로 간단하게 알 수 있어요`}</p>
                        </S.SectionFirstContent>
                        <div>
                            <DefaultBtn
                            text="일기둘러보기"
                            type="select"
                            onClick={onClickRoute}
                            />
                        </div>
                    </S.SectionFirst>
                    <S.SectionSecond $img={defaultDiary1}/>
                </S.Introduction>
        </>
    );
}