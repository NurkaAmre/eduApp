import React, { useState, useEffect } from 'react';
import { RiDeleteBin6Line, RiEdit2Line } from 'react-icons/ri';
import { v4 as uuid } from 'uuid';

interface Article {
  id: string;
  title: string;
  content: string;
  date: string;
}

const ClassNews: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [newArticle, setNewArticle] = useState<Article>({
    id: '',
    title: '',
    content: '',
    date: '',
  });

  const [editingArticleId, setEditingArticleId] = useState<string | null>(null);
  const [editedContentMap, setEditedContentMap] = useState<{
    [id: string]: string;
  }>({});

  useEffect(() => {
    const defaultArticles: Article[] = [
      {
        id: uuid(),
        title: 'Learn coding with Python',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc justo, condimentum id nunc nec, tincidunt aliquet justo.',
        date: '2024-03-15',
      },
      {
        id: uuid(),
        title: 'Self care and mental health',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc justo, condimentum id nunc nec, tincidunt aliquet justo.',
        date: '2024-01-23',
      },
      {
        id: uuid(),
        title: 'Speak up and be heard',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc justo, condimentum id nunc nec, tincidunt aliquet justo.',
        date: '2023-05-05',
      },
    ];
    setArticles(defaultArticles);
  }, []);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setNewArticle({ ...newArticle, [name]: value });
  };

  const handleAddArticle = (event: React.FormEvent) => {
    event.preventDefault();
    const newId = uuid();
    setArticles([...articles, { ...newArticle, id: newId }]);
    setNewArticle({ id: '', title: '', content: '', date: '' });
  };

  const handleEditClick = (articleId: string, currentContent: string) => {
    setEditingArticleId(articleId);
    setEditedContentMap({ ...editedContentMap, [articleId]: currentContent });
  };

  const handleCancelEdit = () => {
    setEditingArticleId(null);
    setEditedContentMap({});
  };

  const handleSaveEdit = () => {
    setArticles(
      articles.map((article) =>
        article.id === editingArticleId
          ? {
              ...article,
              content: editedContentMap[article.id] || article.content,
            }
          : article
      )
    );
    setEditingArticleId(null);
    setEditedContentMap({});
  };

  const handleDeleteArticle = (id: string) => {
    setArticles(articles.filter((article) => article.id !== id));
  };

  return (
    <div className="my-10 mx-10">
      <div className="grid grid-cols-3 gap-4">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-[#8191FF] rounded-l-2xl mx-4 py-4 px-6 items-center"
          >
            {editingArticleId === article.id ? (
              <div className="flex flex-col gap-4 text-gray-700">
                <textarea
                  value={editedContentMap[article.id] || article.content}
                  onChange={(e) =>
                    setEditedContentMap({
                      ...editedContentMap,
                      [article.id]: e.target.value,
                    })
                  }
                  className="px-4 py-3 focus:outline-none"
                />
                <div className="flex gap-4">
                  <button
                    onClick={handleSaveEdit}
                    className="py-2 rounded-full px-4 text-white font-bold bg-[#FF8652]"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="py-2 rounded-full px-4 text-white font-bold bg-[#ff3e24]"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-end justify-end gap-3">
                  <button
                    onClick={() => handleEditClick(article.id, article.content)}
                  >
                    <RiEdit2Line className="mr-1 text-2xl text-yellow-400 font-bold" />
                  </button>
                  <button onClick={() => handleDeleteArticle(article.id)}>
                    <RiDeleteBin6Line className="mr-1 text-red-600 text-2xl font-bold" />
                  </button>
                </div>
                <div className="flex justify-between">
                  <h2 className="text-xl p-2">{article.title}</h2>
                  <p className="p-2 text-sm">Posted: {article.date}</p>
                </div>
                <p className="p-2">{article.content}</p>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col my-10 justify-center items-center">
        <h2>Add New Article</h2>
        <form
          onSubmit={handleAddArticle}
          className="flex flex-col gap-4 text-gray-900"
        >
          <input
            type="text"
            name="title"
            value={newArticle.title}
            onChange={handleInputChange}
            placeholder="Enter title"
            className=" px-4 py-3 focus:outline-none"
          />
          <textarea
            name="content"
            value={newArticle.content}
            onChange={handleInputChange}
            placeholder="Enter your content"
            className=" px-4 py-3 focus:outline-none"
          ></textarea>
          <input
            type="date"
            name="date"
            value={newArticle.date}
            onChange={handleInputChange}
            className="focus:outline-none px-4 py-3"
          />
          <button
            type="submit"
            className="bg-[#FF8652] rounded-full font-bold py-3 px-4 text-white"
          >
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClassNews;
