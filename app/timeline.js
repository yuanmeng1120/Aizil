import React from 'react';
// import 'styles/tailwind.css';
import worldTimeline from './data/china';
import chinaTimeline from './data/china';
import europeTimeline from './data/europe';
import asiaTimeline from './data/china';

const mergeTimelines = (...timelines) => {
    const merged = {};
  
    for (const [timelineIndex, timeline] of timelines.entries()) {
      for (const [year, event] of Object.entries(timeline)) {
        if (!merged[year]) {
          merged[year] = Array(timelines.length).fill("");
        }
  
        merged[year][timelineIndex] = event;
      }
    }
  
    return merged;
  };
  
  const TimelineTable = ({ timelineData }) => (
    <div className="mx-4 my-8 w-full">
      <table className="table-auto w-full bg-white shadow-md rounded-md overflow-hidden">
        <thead className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 text-white">
          <tr>
            <th className="px-4 py-2 whitespace-nowrap">年份</th>
            <th className="px-4 py-2 whitespace-nowrap">中国</th>
            <th className="px-4 py-2 whitespace-nowrap">欧洲</th>
            <th className="px-4 py-2 whitespace-nowrap">亚洲</th>
            <th className="px-4 py-2 whitespace-nowrap">其他</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(timelineData).map(([year, events], index) => (
            <tr key={year} className={index % 2 === 0 ? 'bg-gray-100' : '' }>
              <td className="px-4 py-2 font-semibold whitespace-nowrap text-xs">{year}</td>
              {events.map((event, idx) => (
                <td key={idx} className="px-4 py-2 text-xs">{event}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );  
  const Timeline = () => {
    const mergedTimeline = mergeTimelines(
      chinaTimeline,
      europeTimeline,
      asiaTimeline,
      worldTimeline
    );
  
    return (
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-8">世界历史年表（公元1年——公元1949年）</h1>
        {/* <h1 className="font-bold mb-8">亚洲不含中国，世界不含亚洲、欧洲</h1> */}
        <div className="flex flex-col lg:flex-row">
          <TimelineTable timelineData={mergedTimeline} />
        </div>
      </div>
    );
  };

export default Timeline;

// 你是一位历史学专家，学习了全世界范围内的各类史料、教材、互联网历史文本和百科。
// 你现在正在修订一份历史年表。请帮我写一份亚洲（不含中国）历史年表。
// 从公元前2000年到公元前1年之间，每100年发生的最重要的事，每100年都必须至少列举一件事情！务必！
// 请在考虑政治事件的同时也考虑到经济、思想、军事、文化领域发生的事件。每件事10个字左右描述，务必精简扼要！
// 如果有史上著名的事件，请用它的约定史称来表述它，例如“安史之乱”，“檀渊之盟”。
// 请务必反复检查史实的准确性，确保该事件确实是发生在该事件段内！史实准确性是第一位的！
// 请按照以下格式返回数据：
// const chinaData = {
// "AD 1": ["XXXX"],
// "AD 2": ["XXXX"],
// }


// 你是一位历史学专家，学习了全世界范围内的各类史料、教材、互联网历史文本和百科。
// 你现在正在修订一份历史年表。请帮我写一份亚洲（不含中国）历史年表。
// 从公元元年到公元100年之间，每1年都必须至少列举一件事情！务必！
// 请在考虑政治事件的同时也考虑到经济、思想、军事、文化领域发生的事件。每件事10-20个字左右描述，务必精简扼要！
// 如果有史上著名的事件，请用它的约定史称来表述它，例如“安史之乱”，“檀渊之盟”。
// 请务必反复检查史实的准确性，确保该事件确实是发生在该事件段内！史实准确性是第一位的！
// 请按照以下格式返回数据：
// const chinaData = {
// "AD 1": ["XXXX"],
// "AD 2": ["XXXX"],
// }

// 你是一位历史学专家，学习了全世界范围内的各类史料、教材、互联网历史文本和百科。
// 你现在正在修订一份历史年表。请帮我写一份中国历史年表。
// 从公元元年到公元100年之间，每1年都必须至少列举一件事情！务必！每一年都必须找到一件事。如果你实在无法找到重大事件的话，可以尝试在史料中寻找一些经济、思想、文化、科技、军事领域的其他事件，或者重要历史人物的生平。
// 请在考虑政治事件的同时也考虑到经济、思想、军事、文化领域发生的事件。每件事10-20个字左右描述，务必精简扼要！
// 如果有史上著名的事件，请用它的约定史称来表述它，例如“安史之乱”，“檀渊之盟”。
// 请务必反复检查史实的准确性，确保该事件确实是发生在该事件段内！史实准确性是第一位的！
// 请按照以下格式返回数据：
// const chinaData = {
// "1年": ["XXXX"],
// "2年": ["XXXX"],
// }
