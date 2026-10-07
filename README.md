# front-study

한입 리액트 강의 실습 저장소입니다.

## 폴더 구조

- `onebite-react/sectionXX` : 섹션별 실습 프로젝트 (Vite + React)

## 자주 쓰는 Git 명령어

> 모든 명령어는 저장소 최상위 폴더(`front-study`)에서 실행합니다.

### 상태 확인

```bash
git status            # 변경된 파일 목록 확인
git diff              # 수정 내용 상세 비교
git log --oneline -5  # 최근 커밋 5개 보기
```

### 커밋

```bash
git add .                         # 모든 변경사항 스테이징
git add <파일경로>                 # 특정 파일만 스테이징
git commit -m "커밋 메시지"        # 커밋 생성
```

### 원격 저장소 (push / pull)

```bash
git remote -v         # 원격 저장소 주소 확인
git push              # 현재 브랜치 푸쉬 (origin main)
git push origin main  # 브랜치 명시해서 푸쉬
git pull              # 원격 변경사항 가져와 병합
```

### 브랜치

```bash
git branch                 # 브랜치 목록
git switch -c <브랜치명>    # 새 브랜치 생성 후 이동
git switch <브랜치명>       # 브랜치 이동
git merge <브랜치명>        # 현재 브랜치에 병합
```

### 되돌리기

```bash
git restore <파일경로>           # 작업 중인 수정 취소
git restore --staged <파일경로>  # 스테이징 취소
git reset --soft HEAD~1          # 마지막 커밋 취소 (변경사항은 유지)
```

### 한 번에 커밋 + 푸쉬

```bash
git add . && git commit -m "커밋 메시지" && git push
```
