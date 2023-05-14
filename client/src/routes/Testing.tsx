import {Link, useActionData, useLoaderData} from "react-router-dom";
import {TestList} from "../components/TestList";
import {TestResults} from "../components/TestResults";
import {FC} from "react";

export const Testing: FC = () => {
    const testListApi: any = useLoaderData()
    const postApiData: any = useActionData()
    if (!testListApi) {
        return (
            <div className={'container flex flex-col'}>
                Error
                <Link to={'/'}>GO back</Link>
            </div>
        )
    }

    return postApiData ? (
        <TestResults answeredQuestions={postApiData.answeredQuestions} userAnswers={postApiData.userAnswers} />
    ) : (
        <TestList apiData={testListApi}/>
    );
};