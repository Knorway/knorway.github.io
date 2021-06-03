---
title: '리액트 라우터 v6를 적용해보자'
author: '김노르웨이'
publishedAt: '2021-02-06'
tags: 'React'
summary: '아래의 코드는 중첩되는 하위 경로와 매치되지 않는 경로들에 대한 정보를 Routes 컴포넌트 안에서 전부 중첩으로 처리 하는 예시이다.
가독성이 매우 좋으며 각각의 하위 경로...'
---

아래의 코드는 하위 경로와 매치되지 않는 경우에 대한 정보를 Routes 컴포넌트 안에서 전부 중첩으로 처리 하는 예시이다.
가독성이 매우 좋으며 각각의 하위 경로의 레이아웃 또한 쉽게 정해줄 수 있다. 

<br />

*`src/App.js`*
```javascript
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/app/dashboard" />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/404" element={<NotFoundView />} />
        <Route path="*" element={<Navigate to="/app/dashboard" />} />
      </Route>
      <Route path="app" element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardView />} />
        <Route path="stocks">
          <Route path="/" element={<StockListView />} />
          <Route path=":id" element={<StockDetailView />} />
        </Route>
        <Route path="/sales" element={<SaleListView />} />
        <Route path="/settings" element={<SettingsView />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Route>
    </Routes>
  );
};

export default App;
````