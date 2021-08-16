import React from 'react';
import blogs from '../Data/Blogs';
import styled from 'styled-components';
import Title from '../Components/Title';
import { MainLayout, InnerLayout } from '../styles/Layouts';

function BlogsPage() {
    return (
        <MainLayout>
            <BlogsPageStyled>
                <Title title={'Blogs'} span={'Title'}/>
                <InnerLayout  className={'blog'}>
                {
                blogs.map((blog)=>{
                    return <div key={blogs.id} className="blog-item">
                        <div className="image">
                            <img src={blog.image} alt="" />
                        </div>
                        <div className="title">
                            <a href={blog.link} target="_blank" rel="noopener noreferrer">
                                {blog.title}
                            </a>
                        </div>
                    </div>
                })
            }
                </InnerLayout>
            </BlogsPageStyled>
        </MainLayout>
    )
}
const BlogsPageStyled = styled.div`
    .blog{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 3rem;
        @media screen and (max-width:800px){
           grid-template-columns: repeat(1, 1fr);
        }
        .blog-item{
            background-color: var(--background-dark-color-2);
            padding: 1rem 1rem;
        }
        .image{
            width: 100%;
            overflow: hidden;
            padding-bottom: .5rem;
            img{
                width: 100%;
                height: 90%;
                object-fit: cover;
                cursor: pointer;
                transition: all 0.4s ease-in-out;
                &:hover{
                    cursor: pointer;
                    transform: rotate(3deg) scale(1.1);
                }
            }
        }
        .title{
            a{
                font-size: 1.2rem;
                padding: .5rem 0;
                color:var(--white-color);
                cursor: pointer;
                transition: all 0.4s ease-in-out;
                &:hover{
                    color:var(--primary-color);
                }
            }
        }
    }
    
`;

export default BlogsPage
